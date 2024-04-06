//     *
//    ***
//   *****
//  *******
// *********

/* spaces stars 
     4      1 
     3      3
     2      5
     1      7

spaces = decreasing number -> n - i
stars = ascending odd number -> 2 * i + 1


*/

function triangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

triangle(5);
