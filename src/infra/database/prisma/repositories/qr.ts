import { IQrCodeRepository } from 'src/app/interfaces/repositories/qrcode-repository.contract';
import { QR } from 'src/domain/entities/qr-code.entity';
import { PrismaService } from '../prisma.service';
import { PrismaQRMapper } from '../mappers/qr';
import { Inject } from '@nestjs/common';

export class PrismasQrRepository implements IQrCodeRepository {
  async save(qr: QR, userId: string): Promise<void> {
    const raw = PrismaQRMapper.toPrisma(qr);
    await this.prisma.qR.create({
      data: { ...raw, user: { connect: { id: userId } } },
    });
  }
  @Inject(PrismaService)
  private prisma: PrismaService;
}
