import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertTheProduct(
    name: string,
    description: string,
    price: number,
  ): string {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, name, description, price);
    this.products.push(newProduct);
    return prodId;
  }
}
