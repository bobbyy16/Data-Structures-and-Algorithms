// 153

// 1 cube + 5 cube + 3 cube = 153

function amstrong(n) {
  let original = n;
  let ams = 0;
  while (n > 0) {
    let rem = n % 10;
    ams = ams + rem * rem * rem;
    n = Math.floor(n / 10);
  }

  if (ams === original) {
    return "Ams";
  } else return "not ams";
}

console.log(amstrong(121));
