import { IAuthLogin } from './dto/auth.dto'
import { PrismaService } from './../prisma/prisma.service'
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common'
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor (
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async signup (dto: IAuthLogin) {
    const { password, ...rest } = dto
    const hash = await argon.hash(String(password))
    try {
      const user = await this.prismaService.user.create({
        data: {
          ...rest,
          hash
        }
      })

      delete user.hash

      return user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Id is already taken!')
      }
    }
  }

  async login (
    dto: IAuthLogin
  ): Promise<{accessToken: string}> {
    // find the user by email
    // if use doesnt exist throw an error

    const userExist = await this.prismaService.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (!userExist) {
      throw new UnauthorizedException('User No Found!')
    }

    // compare the passwords
    // if passwords dont match throw an error
    const validatePassword = await argon.verify(userExist.hash, String(dto.password))

    if (!validatePassword) {
      throw new UnauthorizedException('Incorrect Passwords')
    }

    const payload = { sub: userExist.id, name: userExist.email }

    return {
      accessToken: await this.jwtService.signAsync(payload)
    }
  }
}
