import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}

  async tryGet() {
    const users = await this.prisma.user.findMany();
    return users;
  }
  async tryPost() {
    const user = await this.prisma.user.create({
      data: {
        email: 'kuraoa@mail.com',
      },
    });
    return user;
  }
}
