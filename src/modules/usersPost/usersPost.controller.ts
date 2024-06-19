import { Controller, Get } from '@nestjs/common';
import { UsersPostService } from './usersPost.service';

@Controller('userspost')
export class UserspostController {
  constructor(private readonly UsersPostService: UsersPostService) {}

  @Get()
  getUsersAndPosts() {
    return this.UsersPostService.getUsersAndPosts();
  }
}
