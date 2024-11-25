/**
 * Finds the longest palindromic substring in the given input string.
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 *
 * @param inputStr - The input string in which to find the longest palindromic substring.
 * @returns The longest palindromic substring found in the input string.
 */
export function longestPalindrome(inputStr: string): string {
  if (inputStr.length < 2) return inputStr;

  let start = 0,
    end = 0;

  for (let idx = 0; idx < inputStr.length; idx++) {
    let len1 = expandAroundCenter(inputStr, idx, idx);
    let len2 = expandAroundCenter(inputStr, idx, idx + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = idx - Math.floor((len - 1) / 2);
      end = idx + Math.floor(len / 2);
    }
  }

  return inputStr.substring(start, end + 1);
}

/**
 * Expands around the center of a given string to find the length of the longest palindromic substring.
 *
 * @param s - The input string in which to find the palindromic substring.
 * @param left - The starting left index for expansion.
 * @param right - The starting right index for expansion.
 * @returns The length of the longest palindromic substring found by expanding around the center.
 */
function expandAroundCenter(s: string, left: number, right: number): number {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
