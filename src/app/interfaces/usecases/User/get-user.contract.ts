import { User } from 'src/domain/entities/user.entity';

export class GetUserRequest {
  limit: number;
  page: number;
}
export interface GetListUserResponse {
  data: User[];
  metadata: number;
}

export abstract class IGetUserContract {
  abstract execute(request: GetUserRequest): Promise<GetListUserResponse>;
}
