{
  var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(var i = 0; i < nums.length; i++){
      if(typeof(exist[target - nums[i]]) !== 'undefined'){
        ret.push(exist[target - nums[i]]);
        ret.push(i + 1);
      }

      exist[nums[i]] = i + 1;
    }

    return ret
    // let result = [];

    // nums.some(function(num, index1){          
    //     const index2 = nums.indexOf(target - num);
    //     if(index2 !== -1 && index1 !== index2) {
    //         result =  [index1, index2]
    //         return true;
    //     }
    // })
    // return result;
  };

  twoSum([3,2,4], 6)
}