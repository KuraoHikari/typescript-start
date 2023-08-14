import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('test')
  tryGet() {
    return this.authService.tryGet();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  tryPost(@Req() req: any) {
    return this.authService.tryPost();
  }
}
