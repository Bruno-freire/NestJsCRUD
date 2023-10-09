import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../domain/user';
import { UsersService } from './users.service';
import { ApiBody } from '@nestjs/swagger';
import { ICreateUserDTO } from '../dto/ICreateUserDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll()
  }

  @Post()
  @ApiBody({type: ICreateUserDTO})
  create(@Body() user: ICreateUserDTO): User {
    return this.usersService.create(user)
  }
}
