/**
 * Finds the longest palindromic substring in the given input string using Manacher's Algorithm.
 *
 * @param inputStr - The input string in which to find the longest palindromic substring.
 * @returns The longest palindromic substring found in the input string.
 *
 * @remarks
 * The function uses Manacher's Algorithm to find the longest palindromic substring in linear time.
 * It transforms the input string by inserting special characters to handle even-length palindromes.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @example
 * ```typescript
 * const result = longestPalindromeUsingMacherAlgo("babad");
 * console.log(result); // Output could be "bab" or "aba"
 * ```
 *
 * @see {@link https://en.wikipedia.org/wiki/Longest_palindromic_substring#Manacher's_algorithm | Manacher's Algorithm}
 */
export function longestPalindromeUsingMacherAlgo(inputStr: string) {
  // Time complexity: O(n)
  if (inputStr.length < 2) return inputStr;
  let preprocessedString = "|#" + inputStr.split("").join("#") + "#|";
  let palindromeLengths = new Array(preprocessedString.length).fill(0);
  let centerIndex = 0,
    rightBoundary = 0;
  for (
    let currentIndex = 1;
    currentIndex < preprocessedString.length - 1;
    currentIndex++
  ) {
    let mirror = 2 * centerIndex - currentIndex;
    if (currentIndex < rightBoundary)
      palindromeLengths[currentIndex] = Math.min(
        rightBoundary - currentIndex,
        palindromeLengths[mirror]
      );
    let a = currentIndex + (1 + palindromeLengths[currentIndex]);
    let b = currentIndex - (1 + palindromeLengths[currentIndex]);
    while (preprocessedString[a] === preprocessedString[b]) {
      palindromeLengths[currentIndex]++;
      a++;
      b--;
    }
    if (currentIndex + palindromeLengths[currentIndex] > rightBoundary) {
      centerIndex = currentIndex;
      rightBoundary = currentIndex + palindromeLengths[currentIndex];
    }
  }
}

longestPalindromeUsingMacherAlgo("babad"); // Output could be "bab" or "aba"
