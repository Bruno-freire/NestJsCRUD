import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserInMemory } from './repositories/in-memory/UserInMemory';

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
