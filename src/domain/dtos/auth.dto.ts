import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator'

export class IAuthLogin {
  @IsEmail()
  @IsNotEmpty()
    email: string

  @IsNumber()
  @IsNotEmpty()
    password: number
}

export interface CreateUserDto {
  email: string;
  password: string;
}

export interface CreateUserRepositoryDto {
  email: string;
  hash: string;
}

export interface FindUserByEmailRepositoryDto {
  email: string;
}
