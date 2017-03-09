export interface IProduct {
  productName: string;
  price: number;
  image: string;
  rating: number;
  descriptions?: [{[key: string]: string}];
}