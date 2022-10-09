import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import {ProductsService} from "./products.service";

var myroutes:Routes=[
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"products/:brandname", component:ProductsComponent},
];

var myroutes2 = RouterModule.forRoot(myroutes);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    myroutes2
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
