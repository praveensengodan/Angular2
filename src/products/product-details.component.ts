// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ProductService } from './product.service';

// Interface
import { IProduct } from './product';

@Component({
  styles: [ `.product-details {display: flex;
    justify-content: space-around;}`] ,
  template: `
  <div class="panel panel-primary">
    <div class="panel-heading">{{pageTitle}}</div>
    <div class="panel-body">
      <div *ngIf="product" class="product-details">
        <div>
           <div>
              <label>Product Name:</label>
              {{product.productName}}
            </div>
            <div>
              <label>Price:</label>
              {{product.price}}
            </div>
            <div>
              <label>Rating:</label>
              <pm-rating [rating]='product.rating'></pm-rating>
            </div>
          </div>
          <div><img [src]='product.image' [title] = 'product.productName'/></div>
        </div>      
     <button class="btn btn-primary" (click)='onBack()'>Back</button>
    </div>
  </div>`
})
export class ProductDetails implements OnInit {
  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _productServices: ProductService ){}
  product: IProduct;
  onBack(): void {
    this._router.navigate(['/product']);
  }
  ngOnInit(): void {
    this._productServices.getProduct(this._route.snapshot.params['id'])
    .subscribe((product: IProduct) => {
      this.product = product;
      console.log(product);
    });
  }
  pageTitle: string = 'Product Details';
}