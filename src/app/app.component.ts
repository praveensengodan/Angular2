// Angular
import { Component } from '@angular/core';

// Services
import { ProductService } from '../products/product.service';

@Component({
  selector: 'pm-app',
  template:
  `<div class='container-fluid'>
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a [routerLink]="['/welcome']">Home</a></li>
      <li role="presentation"><a [routerLink]="['/product']">Product</a></li>
    </ul>
    <router-outlet></router-outlet>
  </div>
  `,
  providers: [ProductService]
})
export class AppComponent {}