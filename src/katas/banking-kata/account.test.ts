import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import {} from "vitest/mocker";
import { Account } from "./account";

describe("Account", () => {
  beforeEach(() => {
    // mock date to avoid flaky tests
    const mockDate = new Date(2024, 8, 10); // 10th September 2024
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("should be able to empty print statement", () => {
    const account = new Account();
    expect(account.printStatement()).toBe("Date || Amount || Balance");
  });

  test("should be able to deposit money", () => {
    const account = new Account();
    account.deposit(100);
    expect(account.printStatement()).toBe(
      "Date || Amount || Balance\n" + "10.08.2024 || +100 || 100"
    );
  });

  test("should be able to withdraw money", () => {
    const account = new Account();
    account.deposit(100);
    account.withdraw(100);
    expect(account.printStatement()).toBe(
      "Date || Amount || Balance\n" +
        "10.08.2024 || +100 || 100" +
        "\n10.08.2024 || -100 || 0"
    );
  });

  test("should be able to print statement with deposit and withdraw", () => {
    const account = new Account();
    account.deposit(100);
    account.withdraw(50);

    expect(account.printStatement()).toBe(
      "Date || Amount || Balance\n" +
        "10.08.2024 || +100 || 100\n" +
        "10.08.2024 || -50 || 50"
    );
  });

  test("should throw an error when trying to withdraw more than the balance", () => {
    const account = new Account();
    expect(() => account.withdraw(100)).toThrowError("Insufficient balance");
  });

  test("should throw an error when trying to deposit a negative amount", () => {
    const account = new Account();
    expect(() => account.deposit(-100)).toThrowError("Invalid amount");
  });

  test("should throw an error when trying to withdraw a negative amount", () => {
    const account = new Account();
    expect(() => account.withdraw(-100)).toThrowError("Invalid amount");
  });
});
