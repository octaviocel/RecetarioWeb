import { RecipeIngredient } from "src/app/recipe_ingredient/entities/recipe_ingredient.entity";
import { Recipe } from "src/app/recipes/entities/recipe.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingredient')
export class Ingredient extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    name: string;


    @OneToMany(() => RecipeIngredient, (recipe) => recipe.ingredient)
    recipeIngredient: RecipeIngredient[];

}
