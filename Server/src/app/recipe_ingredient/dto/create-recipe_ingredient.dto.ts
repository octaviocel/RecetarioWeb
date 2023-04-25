import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateIngredientDto } from "src/app/ingredients/dto/create-ingredient.dto";
import { CreateRecipeDto } from "src/app/recipes/dto/create-recipe.dto";
import { CreateUnitDto } from "src/app/units/dto/create-unit.dto";

export class CreateRecipeIngredientDto {
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    ingredient: CreateIngredientDto;

    recipe: CreateRecipeDto;

    unit: CreateUnitDto;
}
