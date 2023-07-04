/*
  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.
*/

const productExceptSelf = (nums) => {
  // const memo = new Map();
  const answer = [];
  const productAll = nums.reduce((acc, val) => acc * val);
  console.log;
  for (let i = 0; i < nums.length; i += 1) {
    if (productAll) {
      answer.push(productAll / nums[i]);
      continue;
    }
    if (nums[i]) {
      answer.push(0);
      continue;
    }
    answer.push(
      nums.reduce((acc, val, index) => {
        if (index === i) return acc;
        return acc * val;
      }, 1)
    );
  }
  return answer;
};
