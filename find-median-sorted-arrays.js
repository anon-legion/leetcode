/*
  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
  The overall run time complexity should be O(log (m+n)).
*/

// algorithm bisection searches the elements of a smaller array and attempts to find its position in a hypothetical union array
const findMedianSortedArrays2 = (nums1, nums2) => {
  // To make sure first input array always shorter in length
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  // shorter array
  let x = nums1.length;
  // longer array
  let y = nums1.length;
  // start and end boundaries of search range in nums1 (shorter array)
  let start = 0;
  let end = x;

  // how and why posX and posY are calculated!
  while (start <= end) {
    // partition point of shorter array
    const posX = Math.floor(start + (end - start) / 2);
    // partition point of longer array relative to partition point of shorter array
    // handle odd total number of elements (x+y) by adding 1 to the pointer to add one extra element in the left partition
    // so that the maximum of left partitions (Math.max(maxLeftX, maxLeftY)) can be returned as median
    const posY = Math.floor((x + y + 1) / 2) - posX;

    console.table({ start, end });
    console.table({ posX, posY });

    //create left and right partition for shorter array
    // handle pointer going out of bounds using -Infinity/Infinity
    const maxLeftX = posX === 0 ? -Infinity : nums1[posX - 1];
    const minRightX = posX === x ? Infinity : nums1[posX];

    // create left and right partition for longer array
    // handle pointer going out of bounds using -Infinity/Infinity
    const maxLeftY = posY === 0 ? -Infinity : nums2[posY - 1];
    const minRightY = posY === y ? Infinity : nums2[posY];

    console.table({ maxLeftX, minRightX, maxLeftY, minRightY });

    // if maximum element of all left partitions are smalller than or equal to the minimum elements of all right partitions
    // calculate median by lining up the median elements of the smaller array to the median elements of the
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      // reduce search boundary to end before current posX
      end = posX - 1;
    } else {
      // if maxLeftY > minRightX
      // reduce search boundary bisecting search to start after current posX
      start = posX + 1;
    }
  }
};

const arr1 = [1, 8];
const arr2 = [11, 69];

// const answer = [1,2,3,9,10,11];

console.log(findMedianSortedArrays2(arr1, arr2));
