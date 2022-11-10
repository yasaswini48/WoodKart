import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';
import { cart } from 'src/utilities/cart';

@Component({
  selector: 'app-display-single-order',
  templateUrl: './display-single-order.component.html',
  styleUrls: ['./display-single-order.component.css']
})
export class DisplaySingleOrderComponent implements OnInit 
{
  orderId:any
  orderObj:any
  myCartListProds:any=[]
  constructor(private activeRouterObj:ActivatedRoute,private userServiceObj:UserService,private productServiceObj:ProductService) { }
  ngOnInit(): void 
  {
    this.orderId=this.activeRouterObj.snapshot.params["id"];
    console.log("Displaying order=",this.orderId);
    //get order obj
    this.userServiceObj.getOrderById(this.orderId).subscribe(res=>
      {
        this.orderObj=res;
        this.orderObj.myCart.forEach((cartObj:cart)=>
        {
          let obj=
          {
            "productObj":{},
            "quantity":cartObj.quantity
          }
          this.productServiceObj.getProductById(cartObj.productId).subscribe(res=>
            {
              obj.productObj=res; 
            },
            err=>
            {
              console.log("Error while reading prodObj of id=",cartObj.productId);
            })
          this.myCartListProds.push(obj);
        })
        console.log("Order=",this.orderObj," cart=",this.myCartListProds);
      },
      err=>
      {
        console.log("Error while getting order of id=",this.orderId);
      })
  }
 
}
