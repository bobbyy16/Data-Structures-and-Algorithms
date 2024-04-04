/*
 
 * * * * *
 * * * * *
 * * * * * 
 * * * * *
 * * * * * 
 
 */

function one(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

one(5);
