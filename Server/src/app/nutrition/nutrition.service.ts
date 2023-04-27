import { Injectable } from '@nestjs/common';
import { CreateNutritionDto } from './dto/create-nutrition.dto';
import { UpdateNutritionDto } from './dto/update-nutrition.dto';
import { Nutrition } from './entities/nutrition.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NutritionService {
  constructor(
    @InjectRepository(Nutrition)
    private readonly nutritionRepository: Repository<Nutrition>,
  ) {}

  async create(createNutritionDto: CreateNutritionDto) {
    return await this.nutritionRepository.save(createNutritionDto);
  }

  async findAll() {
    return await this.nutritionRepository.find();
  }

  async findOne(id: number) {
    return await this.nutritionRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNutritionDTO: UpdateNutritionDto) {
    return this.nutritionRepository.create(
      await this.nutritionRepository.save(updateNutritionDTO)
    )  }

  async remove(id: number) {
    return (await this.nutritionRepository.delete(id)).affected;
  }
}
