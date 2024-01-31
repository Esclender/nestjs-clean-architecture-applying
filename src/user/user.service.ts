import { PrismaService } from './../prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { IProfileDto } from './dto/profile.dto'

@Injectable()
export class UserService {
  constructor (
    private prismaService: PrismaService
  ) {}

  async getProfile (dto: IProfileDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: dto.sub
      }
    })

    delete user.hash

    return user
  }
}
