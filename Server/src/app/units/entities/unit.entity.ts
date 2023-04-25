import { RecipeIngredient } from "src/app/recipe_ingredient/entities/recipe_ingredient.entity";
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("unit")
export class Unit extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    name: string;

    // @ManyToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.unit)
    // recipesIngredient: RecipeIngredient[];

    @OneToMany(() => RecipeIngredient, (recipe) => recipe.unit)
    recipiesIngredients: RecipeIngredient[];
}
