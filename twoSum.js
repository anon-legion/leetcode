/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

// const logindexMap = (val, key, indexMap) => {
//   console.log(`m[${key}] = ${val}`);
// };

const twoSum = (nums, target) => {
  const indexMap = new Map([[nums[0], 0]]);

  for (let i = 1; i < nums.length; i++) {
    // indexMap.forEach(logindexMap);
    const complement = target - nums[i];
    // console.log(indexMap.has(complement));
    if (indexMap.has(complement)) return [indexMap.get(complement), i];
    indexMap.set(nums[i], i);
  }
};

// const test = [-3, 4, 3, 90];
// const target = 0;

// console.log(twoSum(test, target));
