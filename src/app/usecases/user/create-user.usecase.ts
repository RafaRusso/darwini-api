import { Injectable } from '@nestjs/common';
import {
  ICreateUserContract,
  SendUserRequest,
} from 'src/app/interfaces/usecases/create-user.contract';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class CreateUserUseCase implements ICreateUserContract {
  async execute(request: SendUserRequest) {
    const { name, email, login, cpf } = request;
    console.log('creating user: ' + request.login);
    const user = new User({ name, email, login, cpf });
    console.log('created user: ' + user.login + ' in id: ' + user.getId());
  }
}
