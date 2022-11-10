import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from 'src/utilities/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  //inject HttpClient obj
  constructor(private httpObj:HttpClient) 
  { }
  getAllProducts():Observable<product[]>
  {
    return this.httpObj.get<product[]>(environment.productsApi);
  } 
  getProductById(productId:String):Observable<product>
  {
    return this.httpObj.get<product>(environment.getProductByIdApi+"/"+productId);
  }
  addProduct(productObj:any):Observable<any>
  {
    return this.httpObj.post(environment.productsApi,productObj);
  }
  updateProduct(updatedProductObj:product):Observable<product>
  {
    return this.httpObj.put<product>(environment.updateProductsApi+"/"+updatedProductObj["id"],updatedProductObj);
  }
  deleteProduct(id:String):Observable<any>
  {
    return this.httpObj.delete(environment.productsApi+"/"+id);
  }
  placeOrder(orderObj:any):Observable<any>
  {
   return  this.httpObj.post<any>(environment.productsApi+"/placeOrder",orderObj);
  }
} 
