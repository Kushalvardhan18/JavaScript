const initialArray = [1, 2, 3];
initialArray.push(5);
console.log(initialArray);

const initialArray2 = [1, 2, 3];
initialArray2.pop();
console.log(initialArray2);

const initialArray3 = [1, 2, 3];
initialArray3.shift();
console.log(initialArray3);

const initialArray4 = [1, 2, 3];
initialArray4.unshift(5);
console.log(initialArray4);

// For each loop
const initialArray6 = [1, 2, 3];
function logThing(str) {
  console.log(str);
}

// logThing(1, 2, 3, 3, 3, 3, 3, 4);
initialArray6.forEach(logThing);
