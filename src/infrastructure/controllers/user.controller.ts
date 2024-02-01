import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { Controller, Get, UseGuards } from '@nestjs/common'
import { IProfileDto } from '../../domain/dtos/profile.dto'
import { User } from '../decorators'
import { UserRepository } from '../repositories/user.repository'

@Controller('user')
export class UserController {
  constructor (
    private userService: UserRepository
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async profile (
    @User() user: IProfileDto
  ) {
    return await this.userService.getProfile(user)
  }
}
