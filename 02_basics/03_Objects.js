/* When an object is declared from
 constructor than the object is singleton (single instance)*/
//  Object.create; this is Constructor method which creates singleton.

//  Objects Literals -------->

const mySym = Symbol("key1"); // Creating symbol and adding it to the obejcts.
const jsUser = {
  name: "Kushal",
  fullname: "Kushal Vardhan",
  age: 22,
  location: "solan",
  // mySym: "mykey1", // This is wrong way because it takes symbol as a string not as a symbol.
  [mySym]: "mykey1",
  email: "kushal@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);  Avoid using like this.
// console.log(jsUser["email"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

jsUser.email = "vardhn@gmail.com";
// console.log(jsUser["email"]);

// Object.freeze(jsUser);
jsUser.email = "vardhan@facebook.com";

// console.log(jsUser["email"]); // Freeze will not let change in the Object.

jsUser.greeting = function () {
  console.log("hello js user");
};
jsUser.greetingTwo = function () {
  console.log(`hello js user, ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
