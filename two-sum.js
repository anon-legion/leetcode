/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  const map = new Map();
  const indices = [];
  nums.some((val, index) => {
    const compliment = target - val;
    if (map.has(compliment)) {
      indices.push(index);
      indices.push(map.get(compliment));
      return true;
    }
    map.set(val, index);
  });
  return indices;
};
