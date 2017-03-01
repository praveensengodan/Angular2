import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  template: `<div>
              <h3>{{pageTitle}}</h3>
              <div>
                <label>Filter By</label>
                <input type='text' [(ngModel)] = 'filterValue'/> 
              </div>
              <h4>Filtered By {{filterValue}}</h4>
              <div  class='table-responsive'>
                <table class='table' *ngIf='products && products.length'>
                  <thead>
                    <tr>
                      <th>
                        <button class='btn btn-primary' (click) = 'toggleImage()'>{{showImage ? 'Hide' : 'Show'}} image</button>
                      </th>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor = 'let product of products | productFilter : filterValue'>
                      <td>
                        <img  *ngIf = 'showImage' [src] = 'product.image' [title] = 'product.productName' style='width:50px; margin: 2px'/>
                      </td>
                      <td>{{product.productName}}</td>
                      <td>{{product.price | currency:'INR':true:'1.2-2'}}</td>
                      <td><pm-rating [rating]='product.rating' (ratingClicked)='onRatingClicked($event)'></pm-rating></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>`
})
export class ProductComponent implements OnInit {
  constructor(private _productService: ProductService) {}
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  filterValue: string;
  onRatingClicked(message: string): void {
    this.pageTitle= `Poduct List - ${message}`
  }
  toggleImage(): void {
    this.showImage = !this.showImage
  }
  products: IProduct[];
  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }
}