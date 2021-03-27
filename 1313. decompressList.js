let decompressRLElist = function test(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i]; j++) {
      result.push(nums[i + 1]);
    }
    i += 1;
  }
  return result;
};

// Array(3).fill(6)
// (3) [6, 6, 6]

// [...acc, ...Array(arr[i - 1]).fill(cur)]
// [...[1,2,3], ...Array(3).fill(6)]
// (6) [1, 2, 3, 6, 6, 6]

var decompressRLElist = function(nums) {
   return nums.reduce(
     (acc, cur, i, arr) =>
       i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
     []
   );
 };