const user = {
  username: "Kushal",
  price: 900,
  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website`);
    // console.log(this);
  },
};
user.welcomeMessage("");
user.username = "Aman";
user.welcomeMessage();
// this --> is used to refer the current context

console.log(this);
// will show empty {} becuase it doesnt have any global context.

// in browser it will show Windows as the browsers global context is Window.

// function chai() {
//   let username = "Kushal";
//   console.log(this.username);
// }
// chai();

// Arrow functions -------------------------------->
// const chai = function () {
//   let username = "Kushal";
//   console.log(this.username);
// };
// chai();

const chai = () => {
  let username = "Kushal";
  console.log(this);
};
chai();

// Explicitly return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// Implicit Return
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({ username: "Kushal" });

console.log(addTwo(3, 4));

const myArray = [2, 5, 56, 64, 4, 4];
