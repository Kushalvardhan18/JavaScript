// Control Flow or Logic Flow
//If statement

const userLoggedIn = true;
if (userLoggedIn) {
  console.log("Kushal Vardhan Logged In");
}

if (2 == "2") {
  console.log("String");
}

// ===(Strict equal) is used for type checking also.

if (2 === "2") {
  console.log("stingss");
}

const temperature = 41;
if (temperature < 50) {
  console.log("temperature less than 50");
} else {
  console.log("Greater than 50");
}

const balance = 1000;
if (balance > 500) console.log("test"); // Implicit scope

const isuserLoggedIn = true;
const debitCard = true;
if (isuserLoggedIn && debitCard) {
  console.log("You can purchase item.");
} else {
  console.log("You cant purchase item");
}
