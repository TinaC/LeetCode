/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let resultLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[resultLength] = nums[i];
      resultLength++;
    }
  }
  return resultLength;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

// 3, 2, 2, 3
//
