/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let resultLength = 1;
  let duplicate = 0;
  for (let i = 1; i < nums.length; i++) {
    console.log(`nums[i: ${i}]: ${nums[i]}`);
    console.log(`nums[resultLength: ${resultLength}]: ${nums[resultLength]}`);
    console.log(`duplicate: ${duplicate}`);
    if (nums[i] > nums[resultLength] && duplicate > 1) {
      resultLength++;
      nums[resultLength] = nums[i];
    }
    if (duplicate < 1) {
      resultLength++;
    }
    // if (duplicate >)
    // if (nums[i] > nums[resultLength] || duplicate < 1) {
    //   console.log(`resultLength: ${resultLength}`);
    // }
    if (nums[i] === nums[i - 1]) {
      duplicate++;
    } else {
      duplicate = 1;
    }
    console.log(nums);
    console.log(`========`);
  }
  return resultLength;
};

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 3]));
