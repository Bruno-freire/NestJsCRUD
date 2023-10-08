import { User } from "src/users/domain/user";
import { IUserRepositorie } from "../../../repositories/IUserRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserInMemory implements IUserRepositorie {
  usersArray: User[] = []
  
  findAll(): User[] {
    return this.usersArray
  }

  create(user: User): User {
    this.usersArray.push(user)
    return user
  }
}