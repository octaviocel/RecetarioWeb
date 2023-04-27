import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) { }

  async create(createRecipeDto: CreateRecipeDto) {
    return await this.recipeRepository.save(createRecipeDto);
  }

  async findAll() {
    return await this.recipeRepository.find();
  }

  async findOne(id: number) {
    return await this.recipeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeRepository.create(
      await this.recipeRepository.save(updateRecipeDto)
    )
  }

  async remove(id: number) {
    return (await this.recipeRepository.delete(id)).affected;
  }
}
