import { Transform } from "class-transformer";
import { Recipe } from "src/app/recipes/entities/recipe.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('instruction')
export class Instruction extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    step: number;

    @Column({type: 'text', nullable: true})
    description: string;

    @Transform(({ value }) => value.id || value)
    @ManyToOne(() => Recipe, (recipe) => recipe.instructions, { eager: true })
    @JoinColumn([{ name: 'recipe', referencedColumnName: 'id' }])
    recipe: Recipe

    
}
