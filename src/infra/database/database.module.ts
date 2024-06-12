import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { IUserRepository } from 'src/app/interfaces/repositories/user-repository.contract';
import { PrismaUserRepository } from './prisma/repositories/user';
import { IQrCodeRepository } from 'src/app/interfaces/repositories/qrcode-repository.contract';
import { PrismasQrRepository } from './prisma/repositories/qr';

@Module({
  providers: [
    PrismaService,
    { provide: IUserRepository, useClass: PrismaUserRepository },
    { provide: IQrCodeRepository, useClass: PrismasQrRepository },
  ],
  exports: [IUserRepository, IQrCodeRepository],
})
export class DatabaseModule {}
