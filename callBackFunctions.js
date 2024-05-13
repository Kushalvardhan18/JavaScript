function sumOfNum(num1, num2, fnCall) {
  result = num1 + num2;
  fnCall(result);
}
function displaySum(data) {
  console.log("The sum of numbers is " + data);
}
function displayPassiveSum(data) {
  console.log(" sum of numbers : " + data);
}
sumOfNum(4, 6, displayPassiveSum);

// Calling one fn from another function.
function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}
function add(a) {
  return a + a + a;
}
// function sumOfSquares(a, b) {
//   let val1 = square(a);
//   let val2 = square(b);
//   return val1 + val2;
// }

// function sumOfCubes(a, b) {
//   let val1 = cube(a);
//   let val2 = cube(b);
//   return val1 + val2;
// }

// Callback Function ----->

function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

console.log(sumOfSomething(2, 4, add));
