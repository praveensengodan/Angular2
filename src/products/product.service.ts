import { Injector } from '@angular/core';
import { IProduct } from './product';
export class ProductService {
  getProducts(): IProduct[] {
    return [{
    productName: 'Joy stick',
    price: 150,
    image: 'https://openclipart.org/download/246396/JoyStick.svg',
    rating: 4.2
  },
  {
    productName: 'Hammer',
    price: 100,
    image: 'https://openclipart.org/download/193438/freehammer.svg',
    rating: 3.5
  }]
  }
}