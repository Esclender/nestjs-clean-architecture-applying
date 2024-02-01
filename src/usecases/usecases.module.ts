import { RepositoriesModule } from './../infrastructure/repositories/repositories.module'
import { AdaptersModule } from './../infrastructure/adapters/adpaters.module'
import { PrismaModule } from '../infrastructure/prisma/prisma.module'
import { EnviromentModule } from '../infrastructure/config/config.module'
import { Global, Module } from '@nestjs/common'
import { LoginUserUsecase } from './auth/login.usecase'
import { SignupUserUsecase } from './auth/signup.usecase'

@Global()
@Module({
  imports: [
    AdaptersModule,
    PrismaModule,
    EnviromentModule,
    RepositoriesModule
  ],
  providers: [
    LoginUserUsecase,
    SignupUserUsecase
  ],
  exports: [
    LoginUserUsecase,
    SignupUserUsecase
  ]
})
export class UsecasesModule {

}
