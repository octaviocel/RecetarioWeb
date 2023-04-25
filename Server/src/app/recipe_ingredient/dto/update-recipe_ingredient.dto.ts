import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeIngredientDto } from './create-recipe_ingredient.dto';

export class UpdateRecipeIngredientDto extends PartialType(CreateRecipeIngredientDto) {}
