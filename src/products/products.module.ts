import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductController } from './products.controller';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductsService],
})
export class ProductsModule {}
