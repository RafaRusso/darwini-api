export abstract class ICreateQrContract {
  abstract execute(userId: string): Promise<void>;
}
