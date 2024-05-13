function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

const res = sumOfSomething(2, 4, function (n) {
  // Function which doesn't have a name is called anonymous function.
  return n * n * n;
});

console.log(res);
