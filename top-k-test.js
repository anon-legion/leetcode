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
  count.forEach((count, number) => {
    if (heap.length < k) {
      heap.push({ number, count });
      if (heap.length === k) buildMinHeap(heap);
      return;
    }

    if (count > heap[0].count) {
      heap[0] = { number, count };
      minHeapify(heap, 0);
    }
  });
  return heap.map((count) => count.number);
}

const buildMinHeap = (heap) => {
  const heapSize = heap.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i -= 1) {
    minHeapify(heap, i);
  }
};

const minHeapify = (heap, i) => {
  const heapSize = heap.length - 1;
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let smallest = i;
  if (left <= heapSize && heap[left].count < heap[smallest].count) smallest = left;
  if (right <= heapSize && heap[right].count < heap[smallest].count) smallest = right;
  if (smallest === i) return;

  [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
  minHeapify(heap, smallest);
};

const test1 = [3, 0, 1, 0, 1, 1];
const k = 2;

console.log(topKFrequent(test1, k));
