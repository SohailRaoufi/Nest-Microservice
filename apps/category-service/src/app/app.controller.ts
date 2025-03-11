import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('categories')
export class AppController {
  constructor(private readonly appService: AppService) {}
  private categories = [];

  @Get()
  getAllCategories() {
    return this.categories;
  }

  @Post()
  addCategory(@Body() category: { name: string }) {
    this.categories.push(category);
    return { message: 'Category added', category };
  }

  @Get(':id')
  async getCategory(@Param('id') id: number) {
    return await this.appService.getCategory(id);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    this.categories.splice(id, 1);
    return { message: 'Category deleted' };
  }
}
