// * - upper
// **
// ***
// **** - upper
// *** - lower
// **
// * - lower

function sideTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

sideTriangle(5);
