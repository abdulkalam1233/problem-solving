/**
 * @description Given a string, find the length of the longest substring without repeating characters.
 * @description Example: "abcabcbb" -> "abc" -> 3
 * @description Example: "bbbbb" -> "b" -> 1
 * @description Example: "pwwkew" -> "wke" -> 3
 *
 * @timeComplexity O(n)
 * @approach Sliding window technique with two pointers to track the current substring without repeating characters.
 * @param input a string
 * @returns the length of the longest substring without repeating characters
 */
export const lengthOfLongestSubstring = (input: string): number => {
  const lastOccurrenceIndex = new Array(128).fill(-1); // Assuming ASCII characters
  let longestSubstringLength = 0,
    prevPointer = 0;

  for (let currPointer = 0; currPointer < input.length; currPointer++) {
    const charCode = input.charCodeAt(currPointer);
    if (lastOccurrenceIndex[charCode] >= prevPointer) {
      prevPointer = lastOccurrenceIndex[charCode] + 1;
    }
    lastOccurrenceIndex[charCode] = currPointer;
    longestSubstringLength = Math.max(
      longestSubstringLength,
      currPointer - prevPointer + 1
    );
  }

  return longestSubstringLength;
};
