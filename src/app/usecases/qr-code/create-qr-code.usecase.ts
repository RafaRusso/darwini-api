import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { IQrCodeRepository } from 'src/app/interfaces/repositories/qrcode-repository.contract';
import { ICreateQrContract } from 'src/app/interfaces/usecases/qr-code/create-qr.contract';
import { QR } from 'src/domain/entities/qr-code.entity';
@Injectable()
export class CreateQrCodeUseCase implements ICreateQrContract {
  constructor(private qrCodeRepository: IQrCodeRepository) {}
  async execute(userId: string) {
    try {
      const base64 = await QRCode.toDataURL(userId);
      const qrCode = new QR({ base64: base64, userId });
      console.log(qrCode);

      await this.qrCodeRepository.save(qrCode, userId);
    } catch (err) {
      console.log('Error generating or saving QR Code: ', err);
    }
  }
}
