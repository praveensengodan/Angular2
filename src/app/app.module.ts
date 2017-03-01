
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductComponent } from '../products/product-list.component';
import { ProductFilterPipe } from '../products/product-filter.pipe';
import { RatingComponent } from '../shared/RatingComponent/rating.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductComponent, ProductFilterPipe, RatingComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }