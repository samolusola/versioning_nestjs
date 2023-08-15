import { Injectable } from '@nestjs/common';
import { CreateOrderDto, CreateOrderDtoV2 } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  private orders = [];

  createOrder(createOrderDto: CreateOrderDto) {
    const newOrder = {
      id: Date.now().toString(),
      ...createOrderDto,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  createOrderV2(createOrderDto: CreateOrderDtoV2) {
    console.log('this is version two!!!');
    const newOrder = {
      id: Date.now().toString(),
      ...createOrderDto,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}
