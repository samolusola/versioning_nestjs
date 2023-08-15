import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './v1/product.controller';
import { ProductControllerV2 } from './v2/product-v2.controller';

@Module({
  providers: [ProductService],
  controllers: [ProductController, ProductControllerV2],
})
export class ProductModule {}
