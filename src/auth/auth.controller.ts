import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { IAuthLogin } from './dto'

@Controller('auth')
export class AuthController {
  constructor (private authService: AuthService) {}
  @Post('login') loginUser (@Body() dto: IAuthLogin) {
    return this.authService.login(dto)
  }

  @Post('signup') signupUser (
    @Body() dto: IAuthLogin
  ) {
    return this.authService.signup(dto)
  }
}
