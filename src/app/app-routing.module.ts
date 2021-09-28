import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './shop/account/orders/orders.component';
import { BrandComponent } from './shop/brands/brand/brand.component';
import { BrandsComponent } from './shop/brands/brands.component';
import { CartComponent } from './shop/cart/cart.component';
import { CategoriesComponent } from './shop/categories/categories.component';
import { CategoryComponent } from './shop/categories/category/category.component';
import { LoginComponent } from './shop/login/login.component';
import { ProductComponent } from './shop/products/product/product.component';
import { ProductsComponent } from './shop/products/products.component';
import { RegisterComponent } from './shop/register/register.component';

const routes: Routes = [

  // App pages
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },

  // Shop pages
  { path: 'cuenta/ordenes', component: OrdersComponent },
  { path: 'carrito', component: CartComponent },

  // Products
  { path: 'products', component: ProductsComponent },
  { path: 'product/:product_slug', component: ProductComponent },

  // Categories
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:category_slug', component: CategoryComponent },

  // Brand
  { path: 'brands', component: BrandsComponent },
  { path: 'brand/:brand_slug', component: BrandComponent },

  // Login & register
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
