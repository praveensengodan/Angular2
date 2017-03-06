// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ProductService } from './product.service';

// Model
import { Product } from './product.model';

// Interface
import { IProduct } from './product';

@Component({
  template: require('./product-add.component.html')
})
export class AddProductComponent {
 constructor(private _productService: ProductService, private _router: Router){}
 pageTitle: string = 'Add New Product';
 product: IProduct = new Product();
 onBack(): void {
   this._router.navigate(['./product']);
 }
 onFormSubmit(form): void {
   const {productName,price,image,rating} = this.product;
   this._productService.saveProduct({productName,price,image,rating}).subscribe(()=>{
    alert('Product Saved Successfully');
    this._router.navigate(['./product']);
   });
 }
}