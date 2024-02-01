import { Global, Module } from '@nestjs/common'
import { EncryptionService } from './encrypt.service'
import { JwtModule } from '@nestjs/jwt'
import { JwtAdapterService } from './jwt.service'

@Global()
@Module({
  imports: [
    JwtModule
  ],
  providers: [
    EncryptionService,
    JwtAdapterService
  ],
  exports: [
    EncryptionService,
    JwtAdapterService
  ]
})
export class AdaptersModule {

}
