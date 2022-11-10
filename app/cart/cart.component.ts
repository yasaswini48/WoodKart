import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';
import { RemoveProdDialogComponent } from '../remove-prod-dialog/remove-prod-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit 
{
  userObj:any
  userCart:any
  cartItems:any=[]
  cartCount:Number=0
  //inject service obj
  constructor(private userServiceObj:UserService, private routerObj:Router,private productServiceObj:ProductService,public dialogObj:MatDialog) 
  { }
  //get the user on loading
  ngOnInit(): void 
  {
    this.userObj=JSON.parse(localStorage.getItem("user")||'{}');
    this.userCart=this.userObj.myCart;  this.cartCount=this.userObj.totalCount ;
    this.userCart.forEach((cartObj: any) => 
    {
        this.productServiceObj.getProductById(cartObj.productId).subscribe(res=>
          {
            console.log("id=",cartObj.productId," got=",res);
            let cartCount=cartObj.quantity;
            this.cartItems.push(
              {
                "productObj":res,
                "productCount":cartObj.quantity
              });
          },
          err=>
          {
            console.log("Error while reading prod in cart!");
          });
    });
    console.log("items=",this.cartItems);
  }
  onUpdateCount(prod:any,ind:any,cnt:any)
  {
    if(this.cartItems[ind].productCount==1  && cnt==-1)
    {
      console.log("Sorry can't reduce!");
      return;
    } 
    console.log("prod=",prod," ind=",ind);
    this.cartItems[ind].productObj.totalCount+=cnt;
    this.cartItems[ind].productCount+=cnt;
    // console.log("After change:",this.cartItems[ind]);
    //update in cart
    let increasedCartObj=
    {
      "productId":this.cartItems[ind].productObj.id,
      "quantity":cnt
    }
    console.log("Cart obj=",increasedCartObj);
    this.userServiceObj.addToCart(this.userObj.id,increasedCartObj).subscribe(
      res=>
      {
        console.log("Sucesfully updated cart!",res);
        this.userObj=res;
        localStorage.setItem("user",JSON.stringify(this.userObj || '{}'));
      },
      err=>
      {
        console.log("Error while adding to cart!");
      });
  }
  onRemoveProduct(ind:any)
  {
    //open dialog
    let dialogRef= this.dialogObj.open(RemoveProdDialogComponent,
      {
        data:
        {
          reomvedProductImage:this.cartItems[ind].productObj.productImage,
        },
        panelClass:'myPanel',
        width:'300px',
        position:{top:"100px"},
        disableClose:true
      });
    dialogRef.afterClosed().subscribe(res=>
      {
      console.log("res of removal=",res);
      if(res==="true")
      {
        let removeProductId=this.cartItems[ind].productObj.id;
        console.log("U wnat to remove ind=",ind," id=",removeProductId);
        this.userServiceObj.removeFromCart(this.userObj.id,removeProductId).subscribe(res=>
        {
          this.userObj=res;
          console.log("Sucesfully removed ",removeProductId," after=",this.userObj);
          localStorage.setItem("user",JSON.stringify(this.userObj));
          this.cartItems.splice(ind,1);
        },
        err=>
        {
          console.log("Cannot remove prd=",removeProductId);
        });
      }
    }); 
  }
  getTotalBillAmount()
  {
    let s=0
    this.userCart=this.userObj.myCart;
    this.cartItems.forEach((obj:any) => 
    {
      s+=obj.productObj.productPrice*obj.productCount;
    });
    return s;
  }
  getGSTAmount()
  {
    let bill=this.getTotalBillAmount()
    return bill*10/100
  }
  getTotalAmount()
  {
    return this.getTotalBillAmount()+this.getGSTAmount()+10;
  }
  getExpectedDelivery()
  {
    let today:any=new Date();
    let dd = String(today.getDate()+7).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }
  gotoShop()
  {
    this.routerObj.navigateByUrl("viewProducts")
  }
  gotoAddress()
  {
    localStorage.setItem("totalAmount",JSON.stringify(this.getTotalAmount()));
    this.routerObj.navigateByUrl("address");
  }
}
