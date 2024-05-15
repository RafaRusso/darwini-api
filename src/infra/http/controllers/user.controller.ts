import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICreateUserContract } from 'src/app/interfaces/usecases/create-user.contract';
import { CreateUserBody } from '../dtos/user/create-user-body';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private createUser: ICreateUserContract) {}

  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 200 })
  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, email, login, cpf } = body;
    await this.createUser.execute({ name, email, login, cpf });
    return;
  }
}
