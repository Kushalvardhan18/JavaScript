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