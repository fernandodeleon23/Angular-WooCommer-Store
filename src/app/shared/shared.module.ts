import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FeaturedProductsComponent } from './loop/featured-products/featured-products.component';
import { ProductsByCatComponent } from './loop/products-by-cat/products-by-cat.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    HeaderComponent,
    FeaturedProductsComponent,
    ProductsByCatComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FeaturedProductsComponent,
    ProductsByCatComponent
  ]
})
export class SharedModule { }
