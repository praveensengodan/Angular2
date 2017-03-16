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
  template: require('./product-details.component.html')
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