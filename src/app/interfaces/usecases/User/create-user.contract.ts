import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SendUserRequest {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  email: string;
  login: string;
  cpf: string;
}

export abstract class ICreateUserContract {
  abstract execute(request: SendUserRequest): Promise<void>;
}
