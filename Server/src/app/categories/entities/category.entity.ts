import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';

import { Recipe } from 'src/app/recipes/entities/recipe.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Recipe, (recipe) => recipe.category)
  recipes: Recipe[];

  constructor(partial: Partial<Category>) {
    super();
    Object.assign(this, partial);
  }
}
