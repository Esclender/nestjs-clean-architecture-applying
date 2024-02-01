import { Injectable } from '@nestjs/common'
import * as argon from 'argon2'

@Injectable()
export class EncryptionService {
  async encrypt (
    payload: any
  ) : Promise<string> {
    return await argon.hash(String(payload))
  }

  async verify (
    hash: string,
    password: any
  ) {
    return await argon.verify(hash, String(password))
  }
}
