import { cart } from "./cart";

export interface order
{
    id:String,
    userId:String,
    myCart:cart[],
    totalCount:Number,
    totalAmount:Number,
    placedOn:String,
    paymentMode:String
}