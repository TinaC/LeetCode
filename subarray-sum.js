/**
 * @param {number[]} nums
 * @return {number}
 */
const find_continuous_k = function find(nums, aim) {
  let sum = 0;
  let startIndex = 0;
  let endIndex = 0;

  while (startIndex < nums.length) {
    for (let i = startIndex; i < nums.length; i++) {
      sum += nums[i];
      if (sum === aim) {
        endIndex = i;

        for (let j = startIndex; j <= endIndex; j++) {
          console.log(`${nums[j]} `);
        }
        return;
      }
      if (sum > aim) {
        startIndex++;
        sum = 0;
        break;
      }
    }
  }
};

find_continuous_k([1, 3, 2, 5, 7, 2], 14);
// [2, 5, 7]

// 1 + 3 + 2 + 5 = 11 < 14
// 1 + 3 + 2 + 5 + 7 = 18 > 14
// 3 + 2 + 5 + 7 = 17 > 14
// 2 + 5 + 7 = 14
// 删掉前面的可能会漏掉一些组合

// [14*1]
// [12*1 + 2]
// [11*1 + 3]
// ...
// [1 + 13]

// 1 + 3 + 2 + 5+7+2 = 20
// 20 - 14 = 6

// 6 = 1 + 3 + 2
