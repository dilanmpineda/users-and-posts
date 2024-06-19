import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserspostModule } from './modules/usersPost/usersPost.module';

@Module({
  imports: [UserspostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
