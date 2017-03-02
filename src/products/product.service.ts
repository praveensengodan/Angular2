// Angular
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Interface
import { IProduct } from './product';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private _http: Http){}
  _url = `http://localhost:3000/products`;
  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._url)
    .map((response: Response) => <IProduct[]> response.json())
  }
  getProduct(id): Observable<IProduct> {
    return this._http.get(`${this._url}/${id}`).map((response: Response) => <IProduct>response.json())
  }
}