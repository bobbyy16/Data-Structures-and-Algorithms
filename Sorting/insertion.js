// It works by iterating through the array and, for each element, finding its correct position in the sorted part of the array and inserting it there.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}
let arr = [78, 90, 2, 3, 0, -1];
console.log(insertionSort(arr));

// o(n)
