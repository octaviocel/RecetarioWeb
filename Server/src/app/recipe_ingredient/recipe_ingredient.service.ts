import { Injectable } from '@nestjs/common';
import { CreateRecipeIngredientDto } from './dto/create-recipe_ingredient.dto';
import { UpdateRecipeIngredientDto } from './dto/update-recipe_ingredient.dto';
import { RecipeIngredient } from './entities/recipe_ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeIngredientService {
  constructor(
    @InjectRepository(RecipeIngredient)
    private readonly recipeIngredientRepository: Repository<RecipeIngredient>,
  ) {}

  async create(createRecipeIngredientDto: CreateRecipeIngredientDto) {
    return await this.recipeIngredientRepository.save(createRecipeIngredientDto);
  }

  async findAll() {
    return await this.recipeIngredientRepository.find();
  }

  async findOne(id: number) {
    return await this.recipeIngredientRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRecipeIngredientDto: UpdateRecipeIngredientDto) {
    return this.recipeIngredientRepository.create(
      await this.recipeIngredientRepository.save(updateRecipeIngredientDto)
    )  }

  async remove(id: number) {
    return (await this.recipeIngredientRepository.delete(id)).affected;
  }
}
