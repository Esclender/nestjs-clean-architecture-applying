import { User } from '@prisma/client'
import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { CreateUserDto } from '../../domain/dtos'
import { EncryptionService } from '../../infrastructure/adapters/encrypt.service'
import { AuthRepository } from './../../infrastructure/repositories/auth.repository'

@Injectable()
export class SignupUserUsecase {
  constructor (
    private readonly encryptionService: EncryptionService,
    private readonly authRepository: AuthRepository
  ) {}

  async execute (dto: CreateUserDto): Promise<User> {
    const { password, email } = dto
    const hash = await this.encryptionService.encrypt(password)
    try {
      const user = await this.authRepository.createUser({
        email,
        hash
      })

      delete user.hash

      return user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Id is already taken!')
      }
    }
  }
}
