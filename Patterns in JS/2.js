/*
   *   
  ***  
 *****     
*******
spaces   stars    spaces
  3        1       3
  2        3       2
  1        5       1
  0        7       0

  spaces descending order = n - i
  stars increasing odd numbers = 2 * i + 1
*/

function one(n) {
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

one(5);
