function nameNTImes(name, n) {
  if (n === 0) return;
  nameNTImes(name, n - 1);
  console.log(name);
}

nameNTImes("Abhishek", 5);
