import { randomUUID } from 'crypto';

export interface QRProps {
  base64: string;
  userId: string;
}
export class QR {
  protected id: string;
  protected props: QRProps;

  constructor(props: QRProps, id?: string) {
    this.id = id ?? randomUUID();
    this.props = props;
  }
  public getId() {
    return this.id;
  }
  public get base64() {
    return this.props.base64;
  }
  public get userId() {
    return this.props.userId;
  }
}
