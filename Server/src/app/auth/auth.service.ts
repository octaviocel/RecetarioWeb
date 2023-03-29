import * as argon2 from 'argon2';

import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

import { AuthDto } from './dto/auth.dto';
import { User } from '../users/entities/user.entity';

import { _accessToken, _refreshToken } from 'src/utils/constants';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string) {
    return await argon2.hash(password);
  }

  async compareHash(hashed: string, attempt: string) {
    return await argon2.verify(hashed, attempt);
  }

  async signUp(createUserDto: CreateUserDto) {
    const userExists = await this.usersService.findOneByKeyword(
      createUserDto.email,
    );

    if (userExists) {
      throw new BadRequestException('Correo ya está vinculado a otra cuenta');
    }

    const hashedPassword = await this.hashPassword(createUserDto.password);
    const newUser = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    const tokens = await this.getTokens(newUser);
    await this.updateRefreshToken(newUser.id, tokens.refreshToken);

    newUser.refreshToken = tokens.refreshToken;
    return plainToInstance(
      User,
      Object.assign({ ...tokens }, { user: newUser }),
    );
  }

  async signIn(authDto: AuthDto) {
    const user = await this.usersService.findOneByKeyword(authDto.email);
    if (!user) {
      throw new BadRequestException('No existe cuenta con ese correo');
    }

    const passwordMatches = await this.compareHash(
      user.password,
      authDto.password,
    );
    if (!passwordMatches) {
      throw new BadRequestException('Password is incorrect');
    }

    const tokens = await this.getTokens(user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    user.refreshToken = tokens.refreshToken;
    return plainToInstance(User, Object.assign({ ...tokens }, { user }));
  }

  async logout(id: string) {
    console.log(id);
    const resetUserToken = new User();
    resetUserToken.id = id;
    resetUserToken.refreshToken = null;
    return this.usersService.update(resetUserToken);
  }

  async refreshTokens(id: string, refreshToken: string) {
    const user = await this.usersService.findOneById(id);
    if (!user || !user.refreshToken) {
      throw new ForbiddenException('Acceso denegado');
    }

    const refreshTokenMatches = await this.compareHash(
      user.refreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches) {
      throw new ForbiddenException('Acceso denegado');
    }

    const tokens = await this.getTokens(user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    user.refreshToken = tokens.refreshToken;
    return plainToInstance(User, Object.assign({ ...tokens }, { user }));
  }

  async updateRefreshToken(id: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashPassword(refreshToken);
    const refreshUserToken = new User();
    refreshUserToken.id = id;
    refreshUserToken.refreshToken = hashedRefreshToken;

    await this.usersService.update(refreshUserToken);
  }

  async getTokens(user: User) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: user.id,
          email: user.email,
          role: user.role.name,
        },
        {
          secret: _accessToken,
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: user.id,
          email: user.email,
          role: user.role.name,
        },
        {
          secret: _refreshToken,
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
