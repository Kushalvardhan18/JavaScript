const score = 400;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN"));

// *****************************  Maths  ***********************************
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(7.5));
// console.log(Math.ceil(7.2));
// console.log(Math.floor(7.2));

// console.log(Math.min(4, 3, 6, 6, 9));
// console.log(Math.max(4, 3, 6, 6, 9));
console.log(Math.random());
console.log(Math.random() * 10 + 1); //To avoid zero values.

const max = 40;
const min = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
