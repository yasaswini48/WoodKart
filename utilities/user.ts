import { cart } from "./cart";

export interface user
{
    id:String,
    username:String,
    password:String,
    myCart:cart,
    totalCount:Number
}