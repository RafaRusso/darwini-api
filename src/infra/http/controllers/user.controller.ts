import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserBody } from '../dtos/user/create-user-body';
import { ICreateUserContract } from 'src/app/interfaces/usecases/User/create-user.contract';
import { IGetUserContract } from 'src/app/interfaces/usecases/User/get-user.contract';
import { PaginationDTO } from '../common/pagination';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private createUser: ICreateUserContract,
    private getUser: IGetUserContract,
  ) {}

  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 200 })
  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, email, login, cpf } = body;
    await this.createUser.execute({ name, email, login, cpf });
    return;
  }

  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200 })
  @ApiQuery({ type: PaginationDTO })
  @Get()
  async getAll(@Query('limit') limit = 15, @Query('page') page = 0) {
    const users = await this.getUser.execute({ limit, page });
    return users;
  }
}
