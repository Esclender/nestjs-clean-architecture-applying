import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
// import { JwtService } from '@nestjs/jwt'

import { IAuthLogin } from '../../domain/dtos'
import { PrismaService } from '../prisma/prisma.service'
import { IAuthRepository } from '../../domain'
// import { EncryptionService } from '../adapters/encrypt.service'
// import { LocalEnviromentService } from '../config/local-env.service'

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor (
    private prismaService: PrismaService
  ) {}

  createUser (
    dto: {email: string, hash: string}
  ): Promise<User> {
    return this.prismaService.user.create({
      data: dto
    })
  }

  async findUser (
    dto: IAuthLogin
  ): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: {
        email: dto.email
      }
    })
  }
}
