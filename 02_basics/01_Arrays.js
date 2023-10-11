// Arrays

const myArr = [0, 1, 2, 3, 6, 1, 9];

const myHeros = ["Shaktiman", "Spiderman", "Ironman"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7);

// console.log(myArr[2]);

// Array Methods

myArr.push(6); // Push new element in the array
// console.log(myArr);

myArr.pop(); // Pop the last element
// console.log(myArr);

myArr.unshift(7);
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(55));
// Gives boolean value for the element whether present in a array or not

// console.log(myArr.indexOf(2));
// Gives index if present in a array otherwise returns -1.

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
// console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
// console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);

// splice includes the last idex element too but slice excludes the last element.
// splice takes out the values from original array and manipulates the value of array.
// splice manipulates the original array but slice doesn't affect original array.
