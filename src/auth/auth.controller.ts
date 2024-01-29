import { Controller, Get } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor (
    private authService: AuthService
  ) {}

  @Get('login')
  loginUser () {
    return this.authService.login()
  }

  @Get('signup')
  signupUser () {
    return this.authService.signup()
  }
}
