import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { LocalEnviromentService } from '../config/local-env.service'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor (
    envService: LocalEnviromentService
  ) {
    super({
      datasources: {
        db: {
          url: envService.getPostgresDbUrl()
        }
      }
    })
  }
}
