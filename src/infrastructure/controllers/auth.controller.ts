import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto, IAuthLogin } from '../../domain/dtos'
import { LoginUserUsecase, SignupUserUsecase } from '../../usecases/auth'

@Controller('auth')
export class AuthController {
  constructor (
    private loginUsecase: LoginUserUsecase,
    private signupUsecase: SignupUserUsecase
  ) {}

  @Post('login')
  loginUser (@Body() dto: IAuthLogin) {
    return this.loginUsecase.execute(dto)
  }

  @Post('signup')
  signupUser (
    @Body() dto: CreateUserDto
  ) {
    return this.signupUsecase.execute(dto)
  }
}
