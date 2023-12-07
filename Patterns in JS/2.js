
const n = 5;

for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let asterisks = "*".repeat(2 * i - 1);
    console.log(spaces + asterisks + spaces);
}
// or

for (let i = 1; i <= n; i++) {
    for (let spaces = 0; spaces < n - i; spaces++) {
        process.stdout.write(" ");
    }
    for (let asterisks = 0; asterisks < 2 * i - 1; asterisks++) {
        process.stdout.write("*");
    }
    for (let spaces = 0; spaces < n - i; spaces++) {
        process.stdout.write(" ");
    }
    console.log(); 
}

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
  stars increasing odd numbers = 2 * i - 1
*/