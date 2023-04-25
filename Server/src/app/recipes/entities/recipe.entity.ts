import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Transform } from 'class-transformer';

import { Category } from 'src/app/categories/entities/category.entity';
import { Nutrition } from 'src/app/nutrition/entities/nutrition.entity';
import { Instruction } from 'src/app/instructions/entities/instruction.entity';
import { Review } from 'src/app/reviews/entities/review.entity';
import { Ingredient } from 'src/app/ingredients/entities/ingredient.entity';
import { RecipeIngredient } from 'src/app/recipe_ingredient/entities/recipe_ingredient.entity';

@Entity('recipes')
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  prep_time: number;

  @Column({ nullable: true })
  cook_time: number;

  @Column({ nullable: true })
  servings: string;

  @Column({ nullable: true })
  media_url: string;

  @Column({ type: 'text', nullable: true })
  meal_type: string;

  @Column({ type: 'simple-array' })
  tags: string[];

  @Transform(({ value }) => value.id || value)
  @ManyToOne(() => Category, (category) => category.id, { eager: true })
  @JoinColumn([{ name: 'category', referencedColumnName: 'id' }])
  category: Category;

  @OneToMany(() => Nutrition, (nutrition) => nutrition.recipe)
  nutrition: Nutrition[];

  @OneToMany(() => Instruction, (instruction) => instruction.recipe)
  instructions: Instruction[];

  @OneToMany(() => Review, (review) => review.recipe)
  reviews: Review[];

  @OneToMany(() => RecipeIngredient, (recipe) => recipe.recipe)
  recipeIngredient: RecipeIngredient[];

}
