import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddressComponent } from './address/address.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { DisplaySingleOrderComponent } from './display-single-order/display-single-order.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { Pay1Component } from './pay1/pay1.component';
import { Pay2Component } from './pay2/pay2.component';
import { Pay3Component } from './pay3/pay3.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { RegisterComponent } from './register/register.component';
import { RemoveProdDialogComponent } from './remove-prod-dialog/remove-prod-dialog.component';
import { SucessComponent } from './sucess/sucess.component';
import { ViewFullProductComponent } from './view-full-product/view-full-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'viewProducts',component:ViewProductsComponent},
  {path:'viewFullProduct/:id',component:ViewFullProductComponent},
  {path:'admin/addProduct',component:AddProductComponent},
  {path:'admin/adminViewProducts',component:ViewProductComponent},
  {path:'admin/viewUsers',component:ViewUserComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrdersComponent},
  {path:'admin',component:AdminComponent},
  {path:'address',component:AddressComponent},
  {path:'payment',component:PaymentGatewayComponent,children:[
    {path:'pay1',component:Pay1Component},
  {path:'pay2',component:Pay2Component},
  {path:'pay3',component:Pay3Component},
  {path:'',pathMatch:'full',redirectTo:'pay1'}
  ]},
  {path:'success',component:SucessComponent},
  {path:'admin/orders/:id',component:DisplaySingleOrderComponent},
  {path:'',pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
