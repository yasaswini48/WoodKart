import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewFullProductComponent } from './view-full-product/view-full-product.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import {NgToastModule} from 'ng-angular-popup' ;
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {MatIconModule} from '@angular/material/icon';
import { NotificationCompComponent } from './notification-comp/notification-comp.component';
import {MatRippleModule} from '@angular/material/core';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { RemoveProdDialogComponent } from './remove-prod-dialog/remove-prod-dialog.component';
import { AddressComponent } from './address/address.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { Pay1Component } from './pay1/pay1.component';
import { Pay2Component } from './pay2/pay2.component';
import { Pay3Component } from './pay3/pay3.component';
import { SucessComponent } from './sucess/sucess.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DisplaySingleOrderComponent } from './display-single-order/display-single-order.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ViewProductsComponent,
    ViewFullProductComponent,
    SnackBarComponent,
    AdminComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewUserComponent,
    NotificationCompComponent,
    CartComponent,
    OrdersComponent,
    RemoveProdDialogComponent,
    AddressComponent,
    PaymentGatewayComponent,
    Pay1Component,
    Pay2Component,
    Pay3Component,
    SucessComponent,
    DisplaySingleOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    MatSnackBarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRippleModule,
    MatBadgeModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
