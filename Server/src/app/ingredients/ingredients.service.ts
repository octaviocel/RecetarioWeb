import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {
    return await this.ingredientRepository.save(createIngredientDto);
  }

  async findAll() {
    return await this.ingredientRepository.find();
  }

  async findOne(id: number) {
    return await this.ingredientRepository.findOne({ where: { id } });
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientRepository.create(
      await this.ingredientRepository.save(updateIngredientDto)
    )
  }

  async remove(id: number) {
    return (await this.ingredientRepository.delete(id)).affected;
  }
}
