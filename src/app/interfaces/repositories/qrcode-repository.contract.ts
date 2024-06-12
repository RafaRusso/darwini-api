import { QR } from 'src/domain/entities/qr-code.entity';

export abstract class IQrCodeRepository {
  abstract save(qr: QR, userId: string): Promise<void>;
}
