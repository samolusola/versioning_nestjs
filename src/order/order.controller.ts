import { Controller, Post, Body, Version } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Post()
  @Version('2')
  createOrderV2(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrderV2(createOrderDto);
  }
}
