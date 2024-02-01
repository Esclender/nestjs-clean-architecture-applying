import { Injectable } from '@nestjs/common'
import { CreateTokenDto } from '../../domain/dtos'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtAdapterService {
  constructor (
    private jwtService: JwtService
  ) {}

  async createToken (
    payload: any,
    options: CreateTokenDto
  ) {
    return await this.jwtService.signAsync(payload, options)
  }
}
