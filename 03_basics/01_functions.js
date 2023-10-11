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
console.log("Result: " + result);

function logInUserMessage(userName = "Aman") {
  return `${userName} just logged in. `;
}
const name = logInUserMessage("Kushal");
console.log(name);
