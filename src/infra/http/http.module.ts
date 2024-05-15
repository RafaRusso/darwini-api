import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UserController } from './controllers/user.controller';
import { ICreateUserContract } from 'src/app/interfaces/usecases/create-user.contract';
import { CreateUserUseCase } from 'src/app/usecases/user/create-user.usecase';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [{ provide: ICreateUserContract, useClass: CreateUserUseCase }],
})
export class HttpModule {}
