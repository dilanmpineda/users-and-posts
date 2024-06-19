import { Test, TestingModule } from '@nestjs/testing';
import { UserspostController } from './usersPost.controller';
import { UsersPostService } from './usersPost.service';

describe('UserspostController', () => {
  let controller: UserspostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserspostController],
      providers: [UsersPostService],
    }).compile();

    controller = module.get<UserspostController>(UserspostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
