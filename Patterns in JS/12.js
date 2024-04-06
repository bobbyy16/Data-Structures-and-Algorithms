// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function twelve(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      if ((i + j) % 2 === 0) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row);
  }
}

twelve(5);
