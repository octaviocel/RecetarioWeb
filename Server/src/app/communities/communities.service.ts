import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';

import { Community } from './entities/community.entity';

@Injectable()
export class CommunitiesService {
  constructor(
    @InjectRepository(Community)
    private readonly communitiesRepository: Repository<Community>,
  ) { }

  async create(createCommunityDto: CreateCommunityDto) {
    return await this.communitiesRepository.save(createCommunityDto);
  }

  async findAll() {
    return await this.communitiesRepository.find();
  }

  async findOne(id: number) {
    return await this.communitiesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCommunityDto: UpdateCommunityDto) {
    return this.communitiesRepository.create(
      await this.communitiesRepository.save(updateCommunityDto),
    );
  }

  async remove(id: number) {
    return (await this.communitiesRepository.delete(id)).affected;
  }
}
