import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateRecipeDto } from "src/app/recipes/dto/create-recipe.dto";

export class CreateInstructionDto {
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    recipe: CreateRecipeDto;
}
