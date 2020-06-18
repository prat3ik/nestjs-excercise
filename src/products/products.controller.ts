import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService){};

  @Post()
  addProduct(
    @Body('name') prodName: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): { id: string } {
    const generatedProdId = this.productsService.insertTheProduct(
      prodName,
      prodDesc,
      prodPrice,
    );
    return { id: generatedProdId };
  }

  @Get()
  getProduct(): string{
      return "Inside products";
  }
}
