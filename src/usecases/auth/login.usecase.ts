import { AuthRepository } from './../../infrastructure/repositories/auth.repository'
import { JwtAdapterService } from './../../infrastructure/adapters/jwt.service'
import { LocalEnviromentService } from './../../infrastructure/config/local-env.service'
import { IAuthLogin } from '../../domain'
import { EncryptionService } from '../../infrastructure/adapters/encrypt.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class LoginUserUsecase {
  constructor (
    private readonly encryptionService: EncryptionService,
    private readonly envService: LocalEnviromentService,
    private readonly jwtService: JwtAdapterService,
    private readonly authRepository: AuthRepository
  ) {}

  async execute (
    dto: IAuthLogin
  ) : Promise<{accessToken: string}> {
    // find the user by email
    // if use doesnt exist throw an error

    const userExist = await this.authRepository.findUser(dto)

    if (!userExist) {
      throw new UnauthorizedException('User No Found!')
    }

    // compare the passwords
    // if passwords dont match throw an error
    const validatePassword = await this.encryptionService.verify(userExist.hash, dto.password)

    if (!validatePassword) {
      throw new UnauthorizedException('Incorrect Passwords')
    }

    const payload = { sub: userExist.id, name: userExist.email }

    return {
      accessToken: await this.jwtService.createToken(payload, {
        secret: this.envService.getJwtSecret(),
        expiresIn: this.envService.getJwtExpiresIn()
      })
    }
  }
}
