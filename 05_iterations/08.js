//  Reduce
const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currentVal) {
  console.log(`Accu ${acc} and currentVal ${currentVal}`);
  return acc + currentVal;
}, 0);

console.log(myTotal);
