/*
  Given an integer array nums and an integer k, return the k most frequent elements.
  You may return the answer in any order.
*/

function topKFrequent(nums, k) {
  const count = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 1);
      continue;
    }
    count.set(nums[i], count.get(nums[i]) + 1);
  }
  const heap = [];
  count.forEach((count, num) => {
    if (heap.length < k) {
      heap.push({ num, count });
      if (heap.length === k) buildMinHeap(heap);
    }
    if (count > heap[0].count) {
      heap[0] = { num, count };
      minHeapify(heap, 0);
    }
  });

  return heap.map((heapElement) => heapElement.num);
}

function buildMinHeap(heap) {
  const lastNode = heap.length - 1;
  for (let i = Math.floor(lastNode / 2); i >= 0; i -= 1) {
    minHeapify(heap, i);
  }
}

function minHeapify(heap, i) {
  const lastNode = heap.length - 1;
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let smallest = i;
  if (left <= lastNode && heap[left].count < heap[smallest].count) smallest = left;
  if (right <= lastNode && heap[right].count < heap[smallest].count) smallest = right;
  if (smallest === i) return;

  [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
  minHeapify(heap, smallest);
}

const test1 = [3, 0, 1, 0, 1, 1];
const k = 2;

console.log(topKFrequent(test1, k));
