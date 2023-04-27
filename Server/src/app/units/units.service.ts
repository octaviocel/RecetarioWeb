import { Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Unit } from './entities/unit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>,
  ) { }
  async create(createUnitDto: CreateUnitDto) {
    return this.unitRepository.create(
      await this.unitRepository.save(createUnitDto)
    )
  }

  async findAll() {
    return await this.unitRepository.find();
  }

  async findOne(id: number) {
    return await this.unitRepository.findOne({
      where: { id }
    })
  }

  async update(id: number, updateUnitDto: UpdateUnitDto) {
    return this.unitRepository.create(
      await this.unitRepository.save(updateUnitDto)
    )
  }

  async remove(id: number) {
    return await this.unitRepository.delete(id);
  }
}
