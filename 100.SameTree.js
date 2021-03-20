{
  var checkPossibility = function (nums) {
    var decreasing = true;
    var big, small;
    var match = false;
    for (var i = 0; i < nums.length - 1; i++) {
      if (nums[i - 1] > nums[i]) {
        if (small || match) {
          decreasing = false;
        }

        if (big) {
          console.log(`find small: ${nums[small]}`);
          small = i - 1;

          if (
            nums[small] > nums[big - 1] &&
            nums[small] < nums[big + 1] &&
            nums[big] > nums[small - 1] &&
            nums[big] < nums[small + 1]
          ) {
            console.log(`find match`);
            match = true;
          }
        } else {
          console.log(`find big: ${nums[big]}`);
          big = i - 1;
        }
      }
    }
    return decreasing;
  };
  checkPossibility([4, 2, 3]);
}
