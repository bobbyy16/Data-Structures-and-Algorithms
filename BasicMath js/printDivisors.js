// 36 = 1, 2, 3, 4, 6, 9, 12, 18, 36

function divisors(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

divisors(100);
