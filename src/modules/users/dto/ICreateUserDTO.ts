import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class ICreateUserDTO {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone: string

  @ApiProperty()
  @IsNotEmpty()
  password: string
}