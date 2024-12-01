/**
 * @description Given a string, find the length of the longest substring without repeating characters.
 * @description Example: "abcabcbb" -> "abc" -> 3
 * @description Example: "bbbbb" -> "b" -> 1
 * @description Example: "pwwkew" -> "wke" -> 3
 * @timeComplexity O(n)
 * @approach Use a sliding window technique with two pointers to track the current substring without repeating characters.
 *           Use a set to store unique characters and adjust the window size by moving the left pointer when a duplicate character is found.
 * @param input string
 * @returns the length of the longest substring without repeating characters
 */
export const lengthOfLongestSubstring = (input: string): number => {
  const uniqueCharactersSet = new Set<string>();
  let longestSubstringLength = 0,
    prevPointer = 0;

  for (
    let currentPointer = 0;
    currentPointer < input.length;
    currentPointer++
  ) {
    while (uniqueCharactersSet.has(input[currentPointer])) {
      uniqueCharactersSet.delete(input[prevPointer]);
      prevPointer++;
    }
    uniqueCharactersSet.add(input[currentPointer]);
    longestSubstringLength = Math.max(
      longestSubstringLength,
      currentPointer - prevPointer + 1
    );
  }

  return longestSubstringLength;
};
