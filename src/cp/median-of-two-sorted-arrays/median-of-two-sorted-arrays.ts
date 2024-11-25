export function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  if (isOdd(mergedArray.length)) {
    return mergedArray[Math.floor(mergedArray.length / 2)];
  }
  const mid = mergedArray.length / 2;
  return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
}

function isOdd(num: number) {
  return num % 2 !== 0;
}
