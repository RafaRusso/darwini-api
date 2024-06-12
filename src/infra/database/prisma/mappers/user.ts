import { User } from 'src/domain/entities/user.entity';
import { User as RawUser } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User): RawUser {
    const result = {
      id: user.getId(),
      login: user.login,
      name: user.name,
      cpf: user.cpf,
      email: user.email,
    };
    return result;
  }
  static toDomainList(rawUsers: RawUser[]): User[] {
    return rawUsers.map(
      ({ ...rawUsers }) =>
        new User(
          {
            login: rawUsers.login,
            name: rawUsers.name,
            cpf: rawUsers.cpf,
            email: rawUsers.email,
          },
          rawUsers.id,
        ),
    );
  }
}
