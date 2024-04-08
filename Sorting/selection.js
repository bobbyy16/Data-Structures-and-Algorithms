// select the least element in the array and swap it with the 1st element and increment 1st element

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }

      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

let arr = [78, 90, 2, 3, 0, -1];
console.log(selectionSort(arr));

// o(n)
