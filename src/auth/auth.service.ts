import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  login () {
    return {
      user: 'John Doe'
    }
  }

  signup () {
    return 'User signed up successfully.'
  }
}
