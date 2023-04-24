import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from '../users/entities/user.entity';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    return await this.authService.login(req.user as UserEntity);
  }

  @Post('/register')
  async register(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }
}
