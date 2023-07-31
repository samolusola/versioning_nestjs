import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductControllerV2 } from './product.controller-v2';

@Module({
  providers: [ProductService],
  controllers: [ProductController, ProductControllerV2],
})
export class ProductModule {}
