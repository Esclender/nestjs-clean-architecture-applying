import { Global, Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { AuthRepository } from './auth.repository'
import { UserRepository } from './user.repository'

@Global()
@Module({
  imports: [
    PrismaModule
  ],
  providers: [
    AuthRepository,
    UserRepository
  ],
  exports: [
    AuthRepository,
    UserRepository
  ]
})
export class RepositoriesModule {}
