// 1      1
// 12    21
// 123  321
// 12344321

/*

    numbers   spaces   numbers
        1       6         1
        2       4         2
        3       2         3
        4       0         4



        for numbers its numbers => i
        for spaces descending even number => 2 * (n - i)


*/

function weiredProblem(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let numbers = 1; numbers <= i; numbers++) {
      row += numbers;
    }

    for (let spaces = 0; spaces < 2 * (n - i - 1); spaces++) {
      row += " ";
    }

    for (let numbers = i; numbers >= 1; numbers--) {
      // loop condition to decrement numbers until 1
      row += numbers;
    }

    console.log(row);
  }
}

weiredProblem(5);
