import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product';
import { Product } from '../product.model';

function rating(min, max): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    if(c.value != undefined && (c.value < min || c.value > max)) {
      return {rating: true};
    }
    return null;
  };
}
@Component({
  template: require('./product-add.component.html')
})
export class AddProduct implements OnInit {
  constructor(private _formBuilder: FormBuilder){}
  product: IProduct = new Product();
  productForm: FormGroup;
  onFormSubmit(productForm): void {
    console.log('i am in',productForm);
  }
  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      productName: ['', [Validators.required, Validators]],
      price: [null, [Validators.required]],
      rating: [null, [Validators.required,rating(1,5)]],
      image: ['', [Validators.required]]
    });
  }
}