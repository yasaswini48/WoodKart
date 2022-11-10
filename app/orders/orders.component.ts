
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit 
{
  userObj:any
  myOrders:any=[]
  myCartListProds:any=[]
  constructor(private userServiceObj:UserService,private routerObj:Router,private productServiceObj:ProductService) 
  { }
  ngOnInit(): void 
  {
      this.userObj=JSON.parse(localStorage.getItem("user")||'{}')
      console.log("Have to show orders of id=",this.userObj.id);
      this.userServiceObj.getAllOrders(this.userObj.id).subscribe(res=>
        {
          this.myOrders=res;
          this.myOrders.forEach((orderObj:any) => 
          {
            let list:any=[]               //list of all prods in each cart
            orderObj.myCart.forEach((obj:any)=>
            {
                let anyObj=
                {
                  "product":{},
                  "quantity":obj.quantity
                }
                this.productServiceObj.getProductById(obj.productId).subscribe(res=>
                  {
                    anyObj["product"]=res
                  },
                  err=>{
                    console.log("Error while getting prod of id=",obj.productId);
                })
                list.push(anyObj);
            })
            this.myCartListProds.push(list);
          });
          console.log("All orders=",this.myOrders," full=",this.myCartListProds);
        },
        err=>
        {
          console.log("Error while getting all orders!");
      });
  }
  gotoShop()
  {
    this.routerObj.navigateByUrl("viewProducts")
  }
  getProductById(id:String)
 {
  this.productServiceObj.getProductById(id).subscribe(
    res=>
    {
      return res;
    },err=>
    {
      return null;
    })

 }
}
