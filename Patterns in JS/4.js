// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function four(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += j + 1 + " ";
    }
    console.log(row);
  }
}
four(5);
