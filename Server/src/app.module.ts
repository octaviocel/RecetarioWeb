import {
  _dbHost,
  _dbName,
  _dbPassword,
  _dbPort,
  _dbSync,
  _dbUser,
} from './utils/constants';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';

import { AuthModule } from './app/auth/auth.module';
import { RolesModule } from './app/roles/roles.module';
import { UsersModule } from './app/users/users.module';
import { S3Module } from './third-party/s3/s3.module';

import { HttpExceptionFilter } from './utils/http-exception.filter';
import { EmailsModule } from './third-party/emails/emails.module';
import { CategoriesModule } from './app/categories/categories.module';
import { CommunitiesModule } from './app/communities/communities.module';
import { RecipesModule } from './app/recipes/recipes.module';
import { IngredientsModule } from './app/ingredients/ingredients.module';
import { InstructionsModule } from './app/instructions/instructions.module';
import { NutritionModule } from './app/nutrition/nutrition.module';
import { RecipeIngredientModule } from './app/recipe_ingredient/recipe_ingredient.module';
import { ReviewsModule } from './app/reviews/reviews.module';
import { UnitsModule } from './app/units/units.module';

@Module({
  imports: [
    AuthModule,
    RolesModule,
    UsersModule,
    IngredientsModule,
    InstructionsModule,
    NutritionModule,
    UnitsModule,
    CommunitiesModule,
    RecipesModule,
    CategoriesModule,
    S3Module,
    EmailsModule,
    RecipeIngredientModule,
    ReviewsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: _dbHost,
      port: _dbPort,
      username: _dbUser,
      password: _dbPassword,
      database: _dbName,
      synchronize: _dbSync,
      dropSchema: _dbSync,
      autoLoadEntities: true,
      logging: ['error','info'],
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  controllers: [],
})
export class AppModule { }
