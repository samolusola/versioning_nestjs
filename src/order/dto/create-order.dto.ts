import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

class ProductDto {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @IsString()
  userId: string;

  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  @IsArray()
  @ArrayMinSize(1)
  products: ProductDto[];

  @IsPositive()
  totalAmount: number;
}
