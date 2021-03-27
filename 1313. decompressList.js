let decompressRLElist = function test(nums) {
  const result = [];
  for (let i = 0; i < nums.length / 2; i++) {
    for (let j = 0; j < nums[i + 1]; j++) {
      result.push(nums[i]);
    }
    i = +1;
  }
  return result;
};
