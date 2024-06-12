import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from 'src/app/usecases/user/create-user.usecase';
import { ICreateUserContract } from 'src/app/interfaces/usecases/User/create-user.contract';
import { IGetUserContract } from 'src/app/interfaces/usecases/User/get-user.contract';
import { GetUsercase } from 'src/app/usecases/user/get-user.usecase';
import { DatabaseModule } from '../database/database.module';
import { ICreateQrContract } from 'src/app/interfaces/usecases/qr-code/create-qr.contract';
import { CreateQrCodeUseCase } from 'src/app/usecases/qr-code/create-qr-code.usecase';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController],
  providers: [
    { provide: ICreateUserContract, useClass: CreateUserUseCase },
    { provide: IGetUserContract, useClass: GetUsercase },
    { provide: ICreateQrContract, useClass: CreateQrCodeUseCase },
  ],
})
export class HttpModule {}
