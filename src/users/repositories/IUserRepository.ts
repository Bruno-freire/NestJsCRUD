import { User } from "../interfaces/user.interface";

export interface IUserRepositorie {
  create(user: User): User;
  findAll(): User[];
}