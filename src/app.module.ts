import { Module } from '@nestjs/common'
import { PrismaModule } from './infrastructure/prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'
import { ControllersModule } from './infrastructure/controllers/controllers.module'
import { EnviromentModule } from './infrastructure/config/config.module'
import { UsecasesModule } from './usecases/usecases.module'
import { RepositoriesModule } from './infrastructure/repositories/repositories.module'

@Module({
  imports: [
    JwtModule.register({
      global: true
    }),
    ControllersModule,
    PrismaModule,
    EnviromentModule,
    UsecasesModule,
    RepositoriesModule
  ]
})
export class AppModule {}
