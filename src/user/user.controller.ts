import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard'
import { Controller, Get, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { IProfileDto } from './dto/profile.dto'
import { User } from '../decorators'

@Controller('user')
export class UserController {
  constructor (
    private userService: UserService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async profile (
    @User() user: IProfileDto
  ) {
    return await this.userService.getProfile(user)
  }
}
