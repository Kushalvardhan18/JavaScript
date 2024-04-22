// Find the maximum number in an Array.

const num = [1, 5, 9, 7, 1, 0, 22, 35, 45, 66, 1, 8, 9, 56, 5];
let maxNum = Number.MIN_VALUE;
for (let i = 0; i < num.length; i++) {
  if (num[i] > maxNum) {
    maxNum = num[i];
  }
}
console.log("The maximum number in ana array is " + maxNum);
