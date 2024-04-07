// iteration

// function iterantionReverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
//   }
//   return arr;
// }

// let arr = [4, 3, 2, 1];
// console.log(iterantionReverseArray(arr));

// recursion

function recursionReverseArray(arr, start, end) {
  if (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    return recursionReverseArray(arr, start + 1, end - 1);
  }
  return arr;
}

let arr = [4, 3, 2, 1];
console.log(recursionReverseArray(arr, 0, arr.length - 1));
