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
