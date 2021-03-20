let checkPossibility = function check(nums) {
  let replaced = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (replaced) return false;

      replaced = true;
      if (nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
};

console.log(checkPossibility([1, 2, 4, 5, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false
console.log(checkPossibility([5, 7, 1, 8])); // true
console.log(checkPossibility([3, 4, 2, 3])); // false
// // console.log(checkPossibility([2, 3, 4, 4])); // true, 2346
// // console.log(checkPossibility([2, 3, 4, 4, 6])); // true,
// // console.log(checkPossibility([4, -2, 3]));
// // console.log(checkPossibility([-9, -2, 10, 1]));

// // console.log(checkPossibility([4, 2, 1]));
// // console.log(checkPossibility([1, 2, 9, 5, -1]));

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var checkPossibility = function (nums) {
//   let replaced = false;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i + 1]) {
//       if (replaced) {
//         // console.log("false");
//         return false;
//       }

//       if (i === 0) {
//         // console.log("switch the first value");
//         replaced = true;
//         continue;
//       }

//       if (i === nums.length - 2) {
//         // console.log("switch the last value");
//         return true;
//       }

//       if (nums[i + 1] - nums[i - 1] >= 0) {
//         // console.log(`switch the ${nums[i]}`);
//         replaced = true;
//         continue;
//       }

//       if (nums[i + 2] - nums[i] >= 0) {
//         // console.log(`switch the latter one ${nums[i + 1]}`);
//         replaced = true;
//         i += 1;
//         continue;
//       }
//       // console.log("find nothing");
//       return false;
//     }
//   }
//   // console.log("true");
//   return true;
// };

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var checkPossibility = function (nums) {
//   let replaced = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[i + 1]) {
//       if (replaced) {
//         return false;
//       }

//       if (i === 0 || nums[i + 1] >= nums[i - 1] || nums[i + 2] >= nums[i]) {
//         replaced = true;
//       } else {
//         if (i === nums.length - 2) return true;
//         return false;
//       }
//     }
//   }
//   return true;
// };

// const checkPossibility = function check(nums) {
//   let replaced = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[i + 1]) {
//       if (replaced) {
//         return false;
//       }

//       if (i === 0 || nums[i + 1] >= nums[i - 1] || nums[i + 2] >= nums[i]) {
//         replaced = true;
//       } else {
//         if (i === nums.length - 2) return true;
//         return false;
//       }
//     }
//   }
//   return true;
// };
// // [4,2,1]
// // [1,2,4,5,3]
