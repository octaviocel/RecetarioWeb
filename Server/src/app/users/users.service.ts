import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return new User(await this.usersRepository.save(createUserDto));
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOneById(id: string) {
    return await this.usersRepository.findOne({
      where: { id },
    });
  }

  async findOneByKeyword(keyword: string) {
    return await this.usersRepository.findOne({
      where: [{ email: ILike(`%${keyword}%`) }],
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return new User(await this.usersRepository.save(updateUserDto));
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
