import { QR } from 'src/domain/entities/qr-code.entity';

export class PrismaQRMapper {
  static toPrisma(qr: QR) {
    const result = { id: qr.getId(), base64: qr.base64 };
    return result;
  }
}
