// *****
//  ***
//   *

// reverse triangle

/* 
    spaces  stars
      0       5
      1       3
      2       1


spaces = ascending order -> i
stars = descending odd number -> 2 * n - (2 * i + 1) 

*/

function revTri(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      row += "*";
    }
    console.log(row);
  }
}

revTri(5);
