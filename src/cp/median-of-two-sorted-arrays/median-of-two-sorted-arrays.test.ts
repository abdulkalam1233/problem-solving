import { describe, test, expect } from "vitest";
import { findMedianSortedArrays } from "./median-of-two-sorted-arrays";

describe("median-of-two-sorted-arrays", () => {
  test("should return 1.5 for inputs nums1 = [1, 2], nums2 = []", () => {
    expect(findMedianSortedArrays([1, 2], [])).toBe(1.5);
  });

  test("should return 1.5 for inputs nums1 = [1], nums2 = [2]", () => {
    expect(findMedianSortedArrays([1], [2])).toBe(1.5);
  });

  test("should return 2 for inputs nums1 = [1,2,3] and nums2 = []", () => {
    expect(findMedianSortedArrays([1, 2, 3], [])).toBe(2);
  });

  test("should return 2 for inputs nums1 = [1, 2] and nums2 = [3]", () => {
    expect(findMedianSortedArrays([1, 2], [3])).toBe(2);
  });

  test("should return 2 for inputs nums1 = [1] and nums2 = [2, 3]", () => {
    expect(findMedianSortedArrays([1], [2, 3])).toBe(2);
  });

  test("should return 2.5 for inputs nums1 = [1, 2] and nums2 = [3, 4]", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test("should return 2 for inputs nums1 = [1, 3] and nums2 = [2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });
});
