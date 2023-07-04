/*
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
  const groups = new Map();
  for (let i = 0; i < strs.length; i += 1) {
    const key = strs[i].split('').sort().join('');
    if (!groups.has(key)) {
      groups.set(key, [strs[i]]);
      continue;
    }
    groups.get(key).push(strs[i]);
  }
  return Array.from(groups.values());
};
