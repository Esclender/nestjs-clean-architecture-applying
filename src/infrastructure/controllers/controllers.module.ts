import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { JwtStrategy } from '../strategies'
import { UserController } from './user.controller'
import { UsecasesModule } from '../../usecases/usecases.module'

@Module({
  imports: [
    PrismaModule,
    UsecasesModule
  ],
  controllers: [
    AuthController,
    UserController
  ],
  providers: [
    JwtStrategy
  ]
})
export class ControllersModule {}
