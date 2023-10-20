const userEmail = [];

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have user email ");
}

// falsy values --->
// false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN

// truthy values --->
// true , [] , "0" , 'false' , " ", {} , function () {}

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??) :null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 44;
console.log(val1);
// Used in Databases for keeping the flow.

// Ternary Operator
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice >= 50
  ? console.log("greater than 50")
  : console.log("less than 50");
