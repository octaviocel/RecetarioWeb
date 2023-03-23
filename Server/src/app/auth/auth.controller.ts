import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

import { CreateUserDto } from '../users/dto/create-user.dto';

import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  signin(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto);
  }

  @Get('logout')
  @UseGuards(AccessTokenGuard)
  logout(@Req() req: Request) {
    this.authService.logout(req.user['sub']);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const id = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(id, refreshToken);
  }
}
