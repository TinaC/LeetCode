/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
let shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[n + i]);
  }
  return result;
};
