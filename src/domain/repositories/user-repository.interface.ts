import { User } from '@prisma/client'
import { IProfileDto } from '../dtos/profile.dto'

export abstract class IUserRepository {
  abstract getProfile(dto: IProfileDto): Promise<User>;
}
