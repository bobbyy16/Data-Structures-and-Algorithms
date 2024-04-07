function oneToN(n) {
  if (n === 0) return;
  oneToN(n - 1);
  console.log(n);
}

oneToN(7);

// oneToN(7) calls oneToN(6)
// oneToN(6) calls oneToN(5)
// oneToN(5) calls oneToN(4)
// oneToN(4) calls oneToN(3)
// oneToN(3) calls oneToN(2)
// oneToN(2) calls oneToN(1)
// oneToN(1) calls oneToN(0)
// oneToN(0) encounters the base case and returns without further recursion.
// As the recursive calls unwind:
// oneToN(1) prints 1
// oneToN(2) prints 2
// oneToN(3) prints 3
// oneToN(4) prints 4
// oneToN(5) prints 5
// oneToN(6) prints 6
// oneToN(7) prints 7
