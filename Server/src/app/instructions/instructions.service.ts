import { Injectable } from '@nestjs/common';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Instruction } from './entities/instruction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstructionsService {
  constructor(
    @InjectRepository(Instruction)
    private readonly instructionRepository: Repository<Instruction>,
  ) {}

  async create(createInstructionDto: CreateInstructionDto) {
    return await this.instructionRepository.save(createInstructionDto);
  }

  async findAll() {
    return await this.instructionRepository.find();
  }

  async findOne(id: number) {
    return await this.instructionRepository.findOne({ where: { id } });
  }

  async update(id: number, updateInstruction: UpdateInstructionDto) {
    return this.instructionRepository.create(
      await this.instructionRepository.save(updateInstruction)
    )
  }

  async remove(id: number) {
    return (await this.instructionRepository.delete(id)).affected;
  }
}
