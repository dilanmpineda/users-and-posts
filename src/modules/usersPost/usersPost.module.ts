import { Module } from '@nestjs/common';
import { UsersPostService } from './usersPost.service';
import { UserspostController } from './usersPost.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UserspostController],
  providers: [UsersPostService],
})
export class UserspostModule { }
