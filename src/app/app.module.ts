// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { ProductComponent } from 'products/product-list.component';
import { ProductFilterPipe } from 'products/product-filter.pipe';
import { RatingComponent } from 'shared/RatingComponent/rating.component';
import { WelcomeComponent } from 'home/welcome.component';
import { ProductDetails } from 'products/product-details.component';
import { AddProductComponent } from 'products/templateDrivenForm/product-add.component';
import { AddProduct } from 'products/reactiveForm/product-add.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductDetails },
      { path: 'add', component: AddProduct },
      { path: 'add/:id', component: AddProduct },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: WelcomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilterPipe,
    RatingComponent,
    WelcomeComponent,
    ProductDetails,
    AddProductComponent,
    AddProduct
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }