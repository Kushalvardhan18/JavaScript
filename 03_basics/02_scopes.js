let a = 200;
var c = 305;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log("Inner: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// we avoid using var as it gives block scope issue .

// Global scope in the browser and the code environment through node is different.

function one() {
  const username = "Kushal";

  function two() {
    const webSite = "youtube.com";
    console.log(username);
  }
  // console.log(webSite);
  two();
}
one();

// ************************************* Interesting ***************************

function addOne(num) {
  return num + 1;
}
addOne(5);

//Expression(functions)
const addTwo = function (num) {
  return num + 2;
};
addTwo(4);
// cannot access functions before intialization.
