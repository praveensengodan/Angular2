import {Component} from '@angular/core';
import {IProduct} from './product';

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
                    <tr *ngFor = 'let product of products'>
                      <td>
                        <img  *ngIf = 'showImage' [src] = 'product.image' [title] = 'product.productName' style='width:50px; margin: 2px'/>
                      </td>
                      <td>{{product.productName}}</td>
                      <td>{{product.price | currency:'INR':true:'1.2-2'}}</td>
                      <td>{{product.rating}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>`
})
export class ProductComponent {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  filterValue: string = 'test';
  toggleImage(): void {
    this.showImage = !this.showImage
  }
  products: IProduct[] = [{
    productName: 'Joy stick',
    price: 150,
    image: 'https://openclipart.org/download/246396/JoyStick.svg',
    rating: 4.2
  },
  {
    productName: 'Hammer',
    price: 100,
    image: 'https://openclipart.org/download/193438/freehammer.svg',
    rating: 3.8
  }]
}