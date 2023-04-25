import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { CreateRecipeDto } from "src/app/recipes/dto/create-recipe.dto";
import { CreateUserDto } from "src/app/users/dto/create-user.dto";

export class CreateReviewDto {
    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    publish_date: string;

    recipe: CreateRecipeDto;
    user: CreateUserDto;
}
