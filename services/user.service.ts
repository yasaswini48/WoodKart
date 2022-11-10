import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cart } from 'src/utilities/cart';
import { order } from 'src/utilities/order';
import { user } from 'src/utilities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  //inject httpclient obj
  constructor(private httpObj:HttpClient) 
  { }
  //get all users
  getAllUsers():Observable<user[]>
  {
    return this.httpObj.get<user[]>(environment.usersApi);
  }
  //add user
  addUser(newUserObj:any):Observable<user>
  {
   return this.httpObj.post<user>(environment.usersApi,newUserObj);
  }
  //get by id
  getUserById(id:String):Observable<user>
  {
    return this.httpObj.get<user>(environment.usersApi+"/getUserById/"+id);
  }
  //get user by username
  getUserByUsername(username:String):Observable<user>
  {
    return this.httpObj.get<user>(environment.usersApi+"/"+username);
  }
  //get user by username and password
  getUserByUsernameAndPassword(username:String,password:String):Observable<user>
  { 
    return this.httpObj.get<user>(environment.usersApi+"/"+username+"/"+password);
  }
  addToCart(userId:String,newCartObj:cart)
  {
    return this.httpObj.post(environment.usersAddToCartApi+"/"+userId,newCartObj);
  }
  getCartCount()
  {
    let userObj=JSON.parse(localStorage.getItem("user") || '{}');
    if(!userObj) return 0;
    return Number(userObj.totalCount);
  }
  removeFromCart(userId:String,productId:String):Observable<user>
  {
   return this.httpObj.delete<user>(environment.usersRemoveFromCartApi+"/"+userId+"/"+productId);
  }
  addAddress(userId:String,addressObj:any):Observable<user>
  {
    return this.httpObj.post<user>(environment.usersApi+"/addAddress/"+userId,addressObj);
  }
  clearCart(userId:String):Observable<user>
  {
   return this.httpObj.delete<user>(environment.usersClearCartApi+"/"+userId);
  }
  getAllOrders(userId:String):Observable<order[]>
  {
   return this.httpObj.get<order[]>(environment.usersAllOrdersApi+"/"+userId);
  }
  getAllOrdersForAdmin():Observable<order[]>
  {
    return this.httpObj.get<order[]>(environment.usersAllOrdersApi);
  }
  getOrderById(orderId:String):Observable<order>
  {
    return this.httpObj.get<order>(environment.ordersApi+"/"+orderId);
  }

}
