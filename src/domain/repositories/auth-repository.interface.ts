import { User } from '@prisma/client'
import { CreateUserRepositoryDto, FindUserByEmailRepositoryDto } from '../dtos'

export abstract class IAuthRepository {
  abstract createUser(dto: CreateUserRepositoryDto) : Promise<User>;
  abstract findUser(dto:FindUserByEmailRepositoryDto) : Promise<User>
}
