function addTwoNum() {
  num = 10 + 20;
  console.log(num);
}

addTwoNum();

// function sumTwoNum(num1, num2) {
//   // Parameters

//   sum = num1 + num2;
//   console.log(sum);
// }

function sumTwoNum(num1, num2) {
  // Parameters

  //   let sum = num1 + num2;
  //   return sum;

  return num1 + num2;
}
const result = sumTwoNum(20, 50); // Arguments
// console.log("Result: " + result);

function logInUserMessage(userName = "Aman") {
  return `${userName} just logged in. `;
}
const name = logInUserMessage("Kushal");
// console.log(name);

// Rest Operator -------->
// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }
// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
  userName: "Kushal",
  age: 22,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({
  userName: "Aman",
  age: 22,
});

const myNewArray = [200, 400, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 900]));
