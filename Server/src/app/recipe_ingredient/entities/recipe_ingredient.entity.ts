import { Transform } from "class-transformer";
import { Ingredient } from "src/app/ingredients/entities/ingredient.entity";
import { Recipe } from "src/app/recipes/entities/recipe.entity";
import { Unit } from "src/app/units/entities/unit.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipe_ingredient')
export class RecipeIngredient extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }) => value.id || value)
    @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipeIngredient, { eager: true })
    @JoinColumn([{ name: 'ingredient', referencedColumnName: 'id' }])
    ingredient: Ingredient;

    @Transform(({ value }) => value.id || value)
    @ManyToOne(() => Recipe, (recipe) => recipe.recipeIngredient, { eager: true })
    @JoinColumn([{ name: 'recipe', referencedColumnName: 'id' }])
    recipe: Recipe;

    @Transform(({ value }) => value.id || value)
    @ManyToOne(() => Unit, (unit) => unit.recipiesIngredients, { eager: true })
    @JoinColumn([{ name: 'unit', referencedColumnName: 'id' }])
    unit: Unit;

    @Column()
    amount: number;
}
