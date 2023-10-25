//  Reduce
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currentVal) {
//   console.log(`Accu ${acc} and currentVal ${currentVal}`);
//   return acc + currentVal;
// }, 0);

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999,
  },
  {
    itemName: "App Dev Course",
    price: 7999,
  },
  {
    itemName: "java Course",
    price: 999,
  },
  {
    itemName: "Web dev Course",
    price: 1999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
