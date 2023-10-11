let a = 200;
var c = 305;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner: ", a);
}
console.log(a);
// console.log(b);
console.log(c);

// we avoid using var as it gives block scope issue .

// Global scope in the browser and the code environment through node is different.
