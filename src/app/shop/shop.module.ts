import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrandsComponent } from './brands/brands.component';
import { BrandComponent } from './brands/brand/brand.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CategoryComponent } from './categories/category/category.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './account/orders/orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BrandsComponent,
    BrandComponent,
    ProductComponent,
    ProductsComponent,
    CategoryComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class ShopModule { }
