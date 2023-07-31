import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './v1';
import { ProductControllerV2 } from './v2';

@Module({
  providers: [ProductService],
  controllers: [ProductController, ProductControllerV2],
})
export class ProductModule {}
