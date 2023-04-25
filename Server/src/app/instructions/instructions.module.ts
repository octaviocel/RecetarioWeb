import { Module } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { InstructionsController } from './instructions.controller';
import { Instruction } from './entities/instruction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Instruction])],
  controllers: [InstructionsController],
  providers: [InstructionsService]
})
export class InstructionsModule {}
