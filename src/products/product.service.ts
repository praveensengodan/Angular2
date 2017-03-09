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
    .map((response: Response) => <IProduct[]> response.json());
  }
  getProduct(id: number): Observable<IProduct> {
    return this._http.get(`${this._url}/${id}`).map((response: Response) => <IProduct>response.json());
  }
  saveProduct(product: IProduct): Observable<IProduct> {
    return this._http.post(this._url , product).map((response: Response) => <IProduct>response.json());
  }
  updateProduct(id: number,product: IProduct): Observable<IProduct> {
    return this._http.put(`${this._url}/${id}` , product).map((response: Response) => <IProduct>response.json());
  }
  deleteProduct(id: number): Observable<IProduct> {
     return this._http.delete(`${this._url}/${id}`).map((response: Response) => <IProduct>response.json());
  }
}