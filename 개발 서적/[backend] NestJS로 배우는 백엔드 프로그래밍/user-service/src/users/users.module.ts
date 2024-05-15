import { Logger, Module } from '@nestjs/common';
import { UsersController } from './interface/users.controller';
import { UserEventsHandler } from './application/event/user-events.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/db/entity/user.entity';
import { UserFactory } from './domain/user.factory';
import { UserRepository } from './infra/db/repository/UserRepository';
import { EmailModule } from 'src/email/email.module';
import { AuthModule } from 'src/auth/auth.module';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './application/command/create-user.handler';
import { LoginHandler } from './application/command/login.handler';
import { VerifyEmailHandler } from './application/command/verify-email.handler';
import { VerifyAccessTokenHandler } from './application/command/verify-access-token.handler';

const commandHandlers = [CreateUserHandler, VerifyEmailHandler, LoginHandler, VerifyAccessTokenHandler];

const queryHandlers = [];

const eventHandlers = [UserEventsHandler];

const factories = [UserFactory];

const repositories = [{ provide: 'UserRepository', useClass: UserRepository }];

@Module({
  imports: [EmailModule, TypeOrmModule.forFeature([UserEntity]), AuthModule, CqrsModule],
  controllers: [UsersController],
  providers: [Logger, ...commandHandlers, ...queryHandlers, ...eventHandlers, ...factories, ...repositories],
})
export class UsersModule {}
