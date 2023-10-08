import { Injectable } from '@nestjs/common';
import { User } from '../domain/user';
import { UserInMemory } from '../infra/repositories/in-memory/UserInMemory';

@Injectable()
export class UsersService {
  constructor(private userInMemory: UserInMemory){}

  findAll(): User[]{
    return this.userInMemory.findAll()
  }

  create(user: User): User{
    this.userInMemory.create(user)
    return user
  }
}
