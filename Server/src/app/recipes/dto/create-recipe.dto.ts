import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateCategoryDto } from "src/app/categories/dto/create-category.dto";
import { CreateInstructionDto } from "src/app/instructions/dto/create-instruction.dto";
import { CreateNutritionDto } from "src/app/nutrition/dto/create-nutrition.dto";

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    prep_time: number;

    @IsNumber()
    @IsNotEmpty()
    cook_time: number;

    @IsString()
    @IsNotEmpty()
    servings: string;

    @IsString()
    @IsNotEmpty()
    medis_url: string;

    @IsString()
    @IsNotEmpty()
    meal_type: string;

    @IsArray()
    tags: string[];

    category: CreateCategoryDto;

    
}
