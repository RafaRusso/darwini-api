import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { IUserRepository } from 'src/app/interfaces/repositories/user-repository.contract';
import {
  GetListUserResponse,
  GetUserRequest,
  IGetUserContract,
} from 'src/app/interfaces/usecases/User/get-user.contract';
@Injectable()
export class GetUsercase implements IGetUserContract {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: GetUserRequest): Promise<GetListUserResponse> {
    const { limit, page } = request;
    const users = await this.userRepository.getAll(limit, page);
    if (users == null) {
      throw new error('no users on the database');
    }
    return { data: users.users, metadata: users.total };
  }
}
