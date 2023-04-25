import { Transform } from "class-transformer";
import { Recipe } from "src/app/recipes/entities/recipe.entity";
import { User } from "src/app/users/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('review')
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'text', nullable:true})
    comment: string;

    @Column({nullable: true})
    rating: number;

    @Column({type:'date'})
    publish_date: string;

    @Transform(({ value }) => value.id || value)
    @ManyToOne(() => Recipe, (recipe) => recipe.reviews, { eager: true })
    @JoinColumn([{ name: 'recipe', referencedColumnName: 'id' }])
    recipe: Recipe

    @Transform(({ value }) => value.id || value)
    @ManyToOne(() => User, (user) => user.reviews, { eager: true })
    @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
    user: User


}
