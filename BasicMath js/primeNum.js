// brute force

let count = 0;

function prime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      count = count + 1;
    }
  }

  if (count !== 0) {
    return "not prime";
  } else {
    return "prime";
  }
}

// console.log(prime(11));

// optimize

let count2 = 0;

function prime2(n) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      count = count + 1;
    }
  }

  if (count !== 0) {
    return "not prime";
  } else {
    return "prime";
  }
}

console.log(prime2(12));
