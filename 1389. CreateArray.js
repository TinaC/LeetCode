const createTargetArray = function (nums, index) {
  const target = [];

  for (let i = 0; i < nums.length; i++) {
    target[index[i]] = nums[i];
  }
  return target;
};
