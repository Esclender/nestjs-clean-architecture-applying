import { ConfigModule } from '@nestjs/config'
import { Global, Module } from '@nestjs/common'
import { LocalEnviromentService } from './local-env.service'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({})
  ],
  providers: [
    LocalEnviromentService
  ],
  exports: [
    LocalEnviromentService
  ]
})
export class EnviromentModule {}
