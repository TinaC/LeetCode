const removeDuplicates = function(nums) {
  var unique_number_index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[unique_number_index]) {
      unique_number_index++;
      nums[unique_number_index] = nums[i];
    }
  }
  // console.log(nums.slice(0, unique_number_index + 1));
  return unique_number_index + 1;
};
console.log(removeDuplicates([0, 1, 2, 2, 3, 4, 4, 4, 5]));
/*
1 > 0, unique_number_index = 1
2 > 1, unique_number_index = 2
2 = 2, skip
3 > 2, 
*/

// var removeDuplicates = function(nums) {
//   var resultArray = [nums[0]];
//   resultArray.length = nums.length;
//   var unique_number_index = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > resultArray[unique_number_index]) {
//       unique_number_index++;
//       resultArray[unique_number_index] = nums[i];
//     }
//   }
//   return resultArray;
// };

// console.log(removeDuplicates([0, 1, 2, 2, 3]));

// var removeDuplicates = function(nums) {
//   var resultArray = [nums[0]];
//   var unique_number = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > unique_number) {
//       resultArray.push(nums[i]);
//       unique_number = nums[i];
//     }
//   }
//   return resultArray;
// };

// console.log(removeDuplicates([0, 1, 2, 2, 3]));

// var removeDuplicates = function(nums) {
//   let start = nums[0];
//   let current_length = 0;
//   let unique_number_index = 0;
//   let result = 1;
//   while (i < nums.length - 1) {
//     if (start >= nums[i + 1]) {
//       // find the next right value to fill nums[i+1]
//       for (let j = i + 1; j < nums.length; j++) {
//         if (start < nums[j]) {
//           nums[i + 1] = nums[j];
//           start = nums[j];
//           result = i + 2;
//           break;
//         }
//       }
//     } else {
//       result = i + 2;
//       start = nums[i + 1];
//     }
//   }
//   return result;
// };

// console.log(removeDuplicates([0, 1]));

// var removeDuplicates = function(nums) {
//   let start = nums[0];
//   let result = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (start >= nums[i + 1]) {
//       // find the next right value to fill nums[i+1]
//       for (let j = i + 1; j < nums.length; j++) {
//         if (start < nums[j]) {
//           nums[i + 1] = nums[j];
//           start = nums[j];
//           result = i + 2;
//           break;
//         }
//       }
//     } else {
//       result = i + 2;
//       start = nums[i + 1];
//     }
//   }
//   return result;
// };

// console.log(removeDuplicates([0, 1]));

/*
var removeDuplicates = function(nums) {
  let start = nums[0];
  let result = 1;
  for(let i =0; i < nums.length-1; i++) {
    if(start >= nums[i+1]) {
      console.log(`start ${start} >= nums[i+1] ${nums[i+1]}`)
      // find the next right value to fill nums[i+1]
      for(let j =i+1; j < nums.length; j++) {
        if(start < nums[j]) {
          console.log(`start ${start} < nums[j] ${nums[j]}`)
          nums[i+1] = nums[j];
          start = nums[j];
          result = i+2;
          console.log(nums);
          console.log(i);
          console.log(start);
          break;
        }
      }
    } else {
      console.log(`start ${start} < nums[i+1] ${nums[i+1]}`)
      console.log(`add result: ${result}`);
      result = i+2;
      start = nums[i+1]
    }
  }
  console.log(nums.slice(0, result));
  return result;
}
*/
// console.log(removeDuplicates([1]));
// console.log(removeDuplicates([1, 2]));

// removeDuplicates([1,1,2]);
// 0,0,0,1,1,1,2,3,3,4,4,4
// 0,1,0,1,1,1,2,3,3,4,4,4
// 0,1,2,1,1,1,0,3,3,4,4,4

// var removeDuplicates = function(nums) {
//   for(let i = nums.length-1; i > 0; i--) {
//     if(nums[i] === nums[i-1]) {
//       for(let j = i; j < nums.length-1; j++) {
//         nums[j] = nums[j+1]
//       }
//       nums.length--;
//       console.log(nums)
//     }
//   }
//   return nums.length;
// }
// 0,0,1,1,1,2,3,3,3,4
// 0,0,1,1,1,2,3,3,3,4
// 0,0,1,1,1,2,3,3,4,4
// 0,0,1,1,1,2,3,3,4

// var removeDuplicates = function(nums) {
//   for(let i = nums.length -1; i >= 0; i--) {
//     if(nums[i] === nums[i-1]) {
//       for(let j = i; j < nums.length; j++) {
//         nums[j] = nums[j+1]
//       }
//       nums.length--;
//       console.log(nums)
//     }
//   }
//   return nums;
// }

// var removeDuplicates = function(nums) {
//   let temp;
//   for(let i = nums.length -1; i >= 0; i--) {
//     if(nums[i] === nums[i-1]) {
//       for(let j = i-1; j >= 0; j--){
//         if(nums[i]!==nums[j]) {
//           if(i!== length -1 ) {
//             temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//           }
//           nums.length --;
//           break;
//         } else {
//           duplicateCount++;
//         }
//       }
//     }
//   }
// }
