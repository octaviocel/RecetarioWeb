import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeIngredientService } from './recipe_ingredient.service';
import { CreateRecipeIngredientDto } from './dto/create-recipe_ingredient.dto';
import { UpdateRecipeIngredientDto } from './dto/update-recipe_ingredient.dto';

@Controller('recipe-ingredient')
export class RecipeIngredientController {
  constructor(private readonly recipeIngredientService: RecipeIngredientService) {}

  @Post()
  create(@Body() createRecipeIngredientDto: CreateRecipeIngredientDto) {
    return this.recipeIngredientService.create(createRecipeIngredientDto);
  }

  @Get()
  findAll() {
    return this.recipeIngredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeIngredientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeIngredientDto: UpdateRecipeIngredientDto) {
    return this.recipeIngredientService.update(+id, updateRecipeIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeIngredientService.remove(+id);
  }
}
