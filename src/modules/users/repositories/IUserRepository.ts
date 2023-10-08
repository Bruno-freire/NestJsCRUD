import { User } from "../domain/user";

export interface IUserRepositorie {
  create(user: User): User;
  findAll(): User[];
}