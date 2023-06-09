import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepository.save(createReviewDto);
  }

  async findAll() {
    return await this.reviewRepository.find();
  }

  async findOne(id: number) {
    return await this.reviewRepository.findOne({ where: { id } });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.reviewRepository.create(
      await this.reviewRepository.save(updateReviewDto)
    )
  }

  async remove(id: number) {
    return (await this.reviewRepository.delete(id)).affected;
  }
}
