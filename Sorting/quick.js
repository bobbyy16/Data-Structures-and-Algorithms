// take a pivot element
/*
and if the element greater than pivot element, add that elemenent to right side of the array
and if the element lesser than the pivot element, add that element to left side of the array
later concatenate (left array + pivot + right array)

*/

function quickSort(arr) {
  // base case for recursion
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-6, 20, 8, 4, -2];
console.log(quickSort(arr));
