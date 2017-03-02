// Angular
import { Pipe, PipeTransform } from '@angular/core';

// Interface
import { IProduct } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: IProduct[], filterBy: string) :IProduct[] {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy) === true) : value;
  }
}