import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { NotifierService } from '../notifier.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit
{
  productPrice:Number=0;
  addProductForm:FormGroup=new FormGroup({
    "productName":new FormControl('',[Validators.required]),
    "productDesc":new FormControl('',[Validators.required]),
    "productImage":new FormControl('',[Validators.required]),
    "productPrice":new FormControl('',[Validators.required])
   });
   //snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
   //inject service obj
  constructor(private productServiceObj:ProductService,private routerObj:Router,private notifierObj:NotifierService) 
  { }
  ngOnInit(): void {

  }
  //getters
  get getProductName()
  {
    return this.addProductForm.get("productName");
  }
  get getProductDesc()
  {
    return this.addProductForm.get("productDesc");
  }
  get getProductImage()
  {
    return this.addProductForm.get("productImage");
  }
  get getProductPrice()
  {
    // console.log(this.addProductForm.get("productPrice"))
    return this.addProductForm.get("productPrice");
  }
  onAddProduct()
  {
    let newProduct=
    {
      productName:this.getProductName?.value,
      "productDesc":this.getProductDesc?.value,
      "productImage":this.getProductImage?.value,
      "productPrice":this.getProductPrice?.value
    }
    // console.log("Adding=",newProduct);
    this.productServiceObj.addProduct(newProduct).subscribe(res=>
      {
      console.log("Product added sucessfully!",res);
      this.notifierObj.showNotificationWithImg("Product added sucessfully!","OK",newProduct["productImage"]);
      this.routerObj.navigateByUrl("admin/adminViewProducts");
      },
      err=>{
        console.log("Error while adding product",err);
      })
  }

}
