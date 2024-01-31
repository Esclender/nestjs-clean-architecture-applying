import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { BookmarkModule } from './bookmark/bookmark.module'
import { PrismaModule } from './prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'
import { jwtSecret } from './constants'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    JwtModule.register({
      secret: jwtSecret,
      global: true,
      signOptions: {
        expiresIn: '60s'
      }
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule
  ]
})
export class AppModule {}
