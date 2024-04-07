function palindrome(n) {
  let revNum = 0;
  let original = n;

  while (n > 0) {
    let rem = n % 10;
    revNum = revNum * 10 + rem;
    n = Math.floor(n / 10);
  }

  if (revNum === original) {
    return "Palindrome";
  } else {
    return "Not palindrome";
  }
}

console.log(palindrome(12331));
