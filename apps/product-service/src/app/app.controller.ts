import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}
  private products = [];

  @MessagePattern('getProducts')
  getAllProducts(data: any) {
    return this.appService.getProducts(data.value);
  }

  @Post()
  addProduct(@Body() product: { name: string; price: number }) {
    this.products.push(product);
    return { message: 'Product added', product };
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.products[id] || { message: 'Product not found' };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    this.products.splice(id, 1);
    return { message: 'Product deleted' };
  }
}
