import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  private categories = [];

  getAllCategories() {
    return this.categories;
  }

  createCategory(createCategoryDto: CreateCategoryDto) {
    const newCategory = {
      id: Date.now().toString(),
      ...createCategoryDto,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
}
