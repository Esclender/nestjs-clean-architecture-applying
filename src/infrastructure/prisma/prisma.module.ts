import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { EnviromentModule } from '../config/config.module'

@Global()
@Module({
  imports: [
    EnviromentModule
  ],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
