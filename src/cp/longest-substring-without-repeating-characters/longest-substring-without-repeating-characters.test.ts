import { describe, expect, test } from "vitest";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

describe("lengthOfLongestSubstring", () => {
  test.each([
    ["", 0],
    ["abc", 3],
    ["ab", 2],
    ["bb", 1],
    ["abcabcbb", 3],
    ["pwwkew", 3],
    ["dvdf", 3],
  ])(
    "should return the length of the longest substring without repeating characters for input '%s' = %i",
    (s, expected) => {
      expect(lengthOfLongestSubstring(s)).toBe(expected);
    }
  );
});
