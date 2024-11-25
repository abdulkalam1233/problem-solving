import { Transaction } from "./transaction";
import { TransactionType } from "./types";

export class Account {
  transactionHistory: Transaction[] = [];
  balance = 0;

  printStatement(): string {
    return this.transactionHistory.reduce((statement, transaction) => {
      const displayedAmount = transaction.displayAmount;
      statement += `\n${transaction.displayDate} || ${displayedAmount} || ${transaction.balance}`;
      return statement;
    }, "Date || Amount || Balance");
  }

  withdraw(amount: number): void {
    if (amount < 0) {
      throw new Error("Invalid amount");
    }
    if (this.balance - amount < 0) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
    this.recordOperation(amount, TransactionType.Withdraw);
  }

  deposit(amount: number): void {
    if (amount < 0) {
      throw new Error("Invalid amount");
    }
    this.balance += amount;
    this.recordOperation(amount, TransactionType.Deposit);
  }

  private recordOperation(amount: number, type: TransactionType) {
    this.transactionHistory.push(new Transaction(amount, this.balance, type));
  }
}
