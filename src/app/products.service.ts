import { Injectable } from '@angular/core';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[];

  constructor() {
    this.products=[
      new Product(101, "Samsung S8", 40000, "Samsung"),
      new Product(101, "Samsung S9", 70000, "Samsung"),
      new Product(101, "iPhone 11", 40000, "Apple"),
      new Product(101, "iPhone 13", 40000, "Apple"),
      new Product(101, "Pixel 2", 40000, "Google"),
      new Product(101, "Pixel 3", 40000, "Google"),
    ];
   }

   getProductsByBrand(brandName:string):Product[]{
     var selectedProducts:Product[] = [];

     for(var i=0; i<this.products.length; i++){
       if(this.products[i].brand==brandName){
         selectedProducts.push(this.products[i]);
       }     
     }

     return selectedProducts;
   }
}
