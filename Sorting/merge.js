// divides array into single elements and then sort

// O(n logN)
//

function mergeSort(arr) {
  // base case
  if (arr.length < 2) {
    return true;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

const arr = [6, 7, 9, -9, 90, 1];
console.log(mergeSort(arr));
