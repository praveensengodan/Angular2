// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { ProductComponent } from '../products/product-list.component';
import { ProductFilterPipe } from '../products/product-filter.pipe';
import { RatingComponent } from '../shared/RatingComponent/rating.component';
import { WelcomeComponent } from '../home/welcome.component';
import { ProductDetails } from '../products/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductDetails },
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
    ProductDetails
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }