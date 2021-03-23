/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
  const result = [];
  let count;
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
};

function smallerNumbersThanCurrent(nums) {
  const copiedArray = Array.from(nums);
  // Descending
  const sorted = copiedArray.sort((n1, n2) => n2 - n1);
  const mappedArray = sorted.map((num, index) => [
    num,
    // count
    nums.length - index - 1,
  ]);
  const map = new Map(mappedArray);
  return nums.map((num) => map.get(num));
}
