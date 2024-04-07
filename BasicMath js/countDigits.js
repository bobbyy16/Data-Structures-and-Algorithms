count = 0;

function countNums(n) {
  while (n > 0) {
    count = count + 1;
    n = Math.floor(n / 10);
  }
  console.log(count);
}

countNums(12345);
