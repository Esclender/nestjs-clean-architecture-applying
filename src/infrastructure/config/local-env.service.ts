import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ILocalEnviroment } from '../../domain/config/local-env.abstract'

@Injectable()
export class LocalEnviromentService implements ILocalEnviroment {
  constructor (
    private configService: ConfigService
  ) {}

  getJwtExpiresIn (): string {
    return '60s'
  }

  getPostgresDbUrl (): string {
    return this.configService.get<string>('DATABASE_URL')
  }

  getJwtSecret ():string {
    return this.configService.get<string>('JWT_SECRET')
  }
}
