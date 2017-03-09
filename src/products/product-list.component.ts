// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ProductService } from './product.service';

// Interface
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  template: require('./product-list.component.html')
})
export class ProductComponent implements OnInit {
  constructor(private _productService: ProductService, private _router: Router) {}
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  filterValue: string;
  onRatingClicked(message: string): void {
    this.pageTitle= `Poduct List - ${message}`;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  products: IProduct[];
  ngOnInit(): void {
    this._productService.getProducts().subscribe((products)=> {
      this.products = products;
      console.log(products);
    });
  }
  addProduct(): void {
    this._router.navigate(['./add']);
  }
  editProduct(id: number): void {
    this._router.navigate([`./add/${id}`]);
  }
  deleteProduct(id: number): void {
    this._productService.deleteProduct(id).subscribe(()=>{
      alert('Deleted Successfuly');
    });
  }
}