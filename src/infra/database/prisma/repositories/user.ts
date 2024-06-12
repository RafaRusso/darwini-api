import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IUserRepository } from 'src/app/interfaces/repositories/user-repository.contract';
import { User } from 'src/domain/entities/user.entity';
import { PrismaUserMapper } from '../mappers/user';
interface GetListUsersResponse {
  users: User[];
  total: number;
}
export class PrismaUserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);
    await this.prisma.user.create({ data: { ...raw } });
  }
  async getAll(limit: number, page: number): Promise<GetListUsersResponse> {
    if (limit == 0) limit = 15;
    page = page * limit;
    const total = await this.prisma.user.count({});
    const rawUsers = await this.prisma.user.findMany({
      skip: Number(page),
      take: Number(limit),
    });
    const users = PrismaUserMapper.toDomainList(rawUsers);
    if (!users) {
      return null;
    } else {
      return { users, total };
    }
  }
  @Inject(PrismaService)
  private prisma: PrismaService;
}
