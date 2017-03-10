import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
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
  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
    ){}
  id: number;
  product: IProduct = new Product();
  productForm: FormGroup;
  onFormSubmit(): void {
     const {productName,descriptions,price,image,rating} = this.productForm.controls;
     const payload ={
       productName: productName.value,
       descriptions: descriptions.value,
       price: price.value,
       image: image.value,
       rating: rating.value
     };
     if(this.id){
       this._productService.updateProduct(this.id, payload).subscribe(()=>{
        alert('Product Updated Successfully');
        this._router.navigate(['./product']);
      });
     } else {
       this._productService.saveProduct(payload).subscribe(()=>{
        alert('Product Saved Successfully');
        this._router.navigate(['./product']);
      });
     }
  }
  initDesc(): FormGroup {
    return this._formBuilder.group({
      description: ['',[Validators.required]]
    });
  }
  onBack(): void {
    this._router.navigate(['./product']);
  }
  addDescription(): void{
    const description: FormArray = <FormArray> this.productForm.controls['descriptions'];
    description.push(this.initDesc());
  }
  populateDesc(descriptions): void {
    const descriptionsFormArray: FormArray = <FormArray> this.productForm.controls['descriptions'];
    descriptions.map((description,index)=>{
      if(index === 1) {
        descriptionsFormArray.push(this.initDesc());
      }
    });
  }
  ngOnInit(): void {
      this.productForm = this._formBuilder.group({
        productName: ['', [Validators.required, Validators]],
        price: [null, [Validators.required]],
        rating: [null, [Validators.required,rating(1,5)]],
        image: ['', [Validators.required]],
        descriptions: this._formBuilder.array([this.initDesc()])
      });
      this.id = this._route.snapshot.params['id'] ?  this._route.snapshot.params['id'] : null;
      if(this.id){
        this._productService.getProduct(this.id).subscribe((product: Product)=>{
          this.populateDesc(product.descriptions);
          this.productForm.patchValue({
            productName: product.productName,
            price: product.price,
            rating: product.rating,
            image: product.image,
            descriptions: product.descriptions
          });
        });
      }
  }
}