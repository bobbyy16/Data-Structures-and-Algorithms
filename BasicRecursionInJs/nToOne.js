function nToOne(n) {
  if (n === 0) return;
  console.log(n);
  nToOne(n - 1);
}
nToOne(10);
