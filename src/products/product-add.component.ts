// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ProductService } from './product.service';

@Component({
  template: `
  <div class="panel panel-primary">
    <div class="panel-heading">{{pageTitle}}</div>
    <div class="panel-body">
      <form #form="ngForm" (ngSubmit)='onFormSubmit(form)' novalidate>
        <div class="form-group">
          <label>Product Name</label>
          <input type="text" class='form-control' name='productName' [(ngModel)]='productName' />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="number" class='form-control' name='price'  [(ngModel)]='price' />
        </div>
         <div class="form-group">
          <label>Rating</label>
          <input type="number" class='form-control' name='rating'  [(ngModel)]='rating' min=0 max=5/>
        </div>
        <div class="form-group">
          <label>Image</label>
          <input type="text" class='form-control' name='image'  [(ngModel)]='image' />
        </div>
        <button class="btn btn-primary" type="submit">Add</button>
        <button class="btn btn-default" (click)='onBack()'>Back</button>
      </form>
    </div>
  </div>
  `
})
export class AddProductComponent {
 constructor(private _productService: ProductService, private _router: Router){}
 pageTitle: string = 'Add New Product';
 productName: string;
 price: number;
 image: string;
 rating: string;
 onBack(): void {
   this._router.navigate(['./product']);
 }
 onFormSubmit(form): void {
   const {productName,price,image,rating} = this;
   this._productService.saveProduct({productName,price,image,rating}).subscribe(()=>{
    alert('Product Saved Successfully');
    this._router.navigate(['./product']);
   });
 }
}