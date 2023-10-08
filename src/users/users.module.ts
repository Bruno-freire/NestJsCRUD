import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserInMemory } from './repositories/in-memory/UserInMemory';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserInMemory]
})
export class UsersModule {}
