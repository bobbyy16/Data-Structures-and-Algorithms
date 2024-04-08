// compare 1st and 2nd element in the array and swap if the 1st element is larger than the 2nd element

function bubbleSort(arr) {
  //number of passes
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      //loop for compare and swap
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let arr = [78, 90, 2, 3, 0, -1];
console.log(bubbleSort(arr));

// o(n2)
