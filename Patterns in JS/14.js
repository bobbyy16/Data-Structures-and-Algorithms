/* 
1
2 3
4 5 6
7 8 9 10


*/

function printPattern(n) {
  let counter = 1;

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
      row += counter + " ";
      counter++;
    }

    console.log(row);
  }
}

printPattern(4);
