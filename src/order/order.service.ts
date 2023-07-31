import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

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

  createOrderV2(createOrderDto: CreateOrderDto) {
    console.log('This is version 2');
    const newOrder = {
      id: Date.now().toString(),
      ...createOrderDto,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}
