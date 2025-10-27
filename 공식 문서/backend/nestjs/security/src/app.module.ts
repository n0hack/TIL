import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UsersModule, AuthModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
