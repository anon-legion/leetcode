/*
  Given a string s, find the length of the longest substring
  without repeating characters.
*/

const lengthOfLongestSubstring = (s, startIndex = 0, endIndex = 0, longest = 0) => {
  // console.table({ s, startIndex, endIndex, longest });
  const currentString = `${s.slice(startIndex, endIndex + 1)}`;
  const uniqueCharacterCount = new Set(currentString.split('')).size;

  // base step
  if (endIndex === s.length) return longest;

  // if all characters of current substring are unique, step endIndex by 1
  if (currentString.length === uniqueCharacterCount)
    return lengthOfLongestSubstring(
      s,
      (startIndex = startIndex),
      (endIndex = endIndex + 1),
      (longest = longest > currentString.length ? longest : currentString.length)
    );

  // if all characters of current substring are not unique, step startIndex by 1
  if (currentString.length !== uniqueCharacterCount && startIndex < endIndex)
    return lengthOfLongestSubstring(s, (startIndex = startIndex + 1), (endIndex = endIndex), (longest = longest));

  return longest;
};

const testCase = 'abcabcbb';
console.log(lengthOfLongestSubstring(testCase));
