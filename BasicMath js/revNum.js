function reverseNumber(n) {
  let revNum = 0;
  while (n > 0) {
    let rem = n % 10;
    revNum = revNum * 10 + rem;
    n = Math.floor(n / 10);
  }
  return revNum;
}

console.log(reverseNumber(1234));
