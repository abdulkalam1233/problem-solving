import { TransactionType } from "./types";

export class Transaction {
  private readonly date: Date;

  constructor(
    public readonly amount: number,
    public readonly balance: number,
    public readonly type: TransactionType
  ) {
    this.date = new Date();
  }

  public get displayAmount(): string {
    return this.type === TransactionType.Deposit
      ? `+${this.amount}`
      : `-${this.amount}`;
  }

  public get displayDate(): string {
    return `${this.padNumber(this.date.getDate())}.${this.padNumber(
      this.date.getMonth()
    )}.${this.date.getFullYear()}`;
  }

  private padNumber(num: number) {
    return num < 10 ? `0${num}` : num;
  }
}
