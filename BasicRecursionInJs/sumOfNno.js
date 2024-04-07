let add = 0;
function sum(n) {
  if (n === 0) {
    console.log(add);
    return;
  }
  add += n;
  sum(n - 1);
}

sum(5);
