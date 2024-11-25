import { describe, it, expect } from "vitest";
import { longestPalindromeUsingMacherAlgo } from "./manchers-algo";

describe("longestPalindromeUsingMacherAlgo", () => {
  it("should return the longest palindromic substring for a given input", () => {
    expect(longestPalindromeUsingMacherAlgo("babad")).toBe("bab");
    expect(longestPalindromeUsingMacherAlgo("cbbd")).toBe("bb");
    expect(longestPalindromeUsingMacherAlgo("a")).toBe("a");
    expect(longestPalindromeUsingMacherAlgo("ac")).toBe("a");
    expect(longestPalindromeUsingMacherAlgo("racecar")).toBe("racecar");
  });

  it("should handle empty string input", () => {
    expect(longestPalindromeUsingMacherAlgo("")).toBe("");
  });

  it("should handle strings with no palindromes longer than 1 character", () => {
    expect(longestPalindromeUsingMacherAlgo("abc")).toBe("a");
  });

  it("should handle strings with all characters the same", () => {
    expect(longestPalindromeUsingMacherAlgo("aaaa")).toBe("aaaa");
  });

  it("should handle strings with multiple palindromes of the same length", () => {
    expect(longestPalindromeUsingMacherAlgo("abacdfgdcaba")).toBe("aba");
  });
});
