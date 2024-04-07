// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(6));

// series

function fibonacciSeries(n) {
  let series = [];

  function fibonacci(num) {
    if (num <= 1) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }

  for (let i = 0; i < n; i++) {
    series.push(fibonacci(i));
  }

  return series;
}

console.log(fibonacciSeries(5));
