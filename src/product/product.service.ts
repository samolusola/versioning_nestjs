import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  private products = [];

  getAllProducts() {
    return this.products;
  }

  createProduct(createProductDto: CreateProductDto) {
    const newProduct = {
      id: Date.now().toString(),
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
