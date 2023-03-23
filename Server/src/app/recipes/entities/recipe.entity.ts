import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Transform } from 'class-transformer';

import { Category } from 'src/app/categories/entities/category.entity';

@Entity('recipes')
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Transform(({ value }) => value.name || value)
  @ManyToOne(() => Category, (category) => category.id, { eager: true })
  @JoinColumn([{ name: 'category', referencedColumnName: 'name' }])
  category: Category;
}
