import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/app/interfaces/repositories/user-repository.contract';
import {
  ICreateUserContract,
  SendUserRequest,
} from 'src/app/interfaces/usecases/User/create-user.contract';
import { User } from 'src/domain/entities/user.entity';
import { ICreateQrContract } from 'src/app/interfaces/usecases/qr-code/create-qr.contract';

@Injectable()
export class CreateUserUseCase implements ICreateUserContract {
  constructor(
    private userRepository: IUserRepository,
    private createQrCode: ICreateQrContract,
  ) {}
  async execute(request: SendUserRequest) {
    const { name, email, login, cpf } = request;
    console.log('creating user: ' + request.login);
    const user = new User({ name, email, login, cpf });
    await this.userRepository.save(user);
    await this.createQrCode.execute(user.getId());
  }
}
