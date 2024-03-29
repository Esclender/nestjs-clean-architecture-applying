import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator'

export class IAuthLogin {
  @IsEmail()
  @IsNotEmpty()
    email: string

  @IsNumber()
  @IsNotEmpty()
    password: number
}
