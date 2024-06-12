import { User } from 'src/domain/entities/user.entity';
interface GetListUsersResponse {
  users: User[];
  total: number;
}
export abstract class IUserRepository {
  abstract save(user: User): Promise<void>;
  abstract getAll(limit: number, page: number): Promise<GetListUsersResponse>;
}
