import { Transform } from "class-transformer";
import { Recipe } from "src/app/recipes/entities/recipe.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('nutrition')
export class Nutrition extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    amount: number;

    @Transform(({ value }) => value.id || value)
    @ManyToOne(() => Recipe, (recipe) => recipe.nutrition, { eager: true })
    @JoinColumn([{ name: 'recipe', referencedColumnName: 'id' }])
    recipe: Recipe

   
}
