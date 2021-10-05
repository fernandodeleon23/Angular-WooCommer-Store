import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
