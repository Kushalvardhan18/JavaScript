let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("success");
  } else {
    reject("error");
  }
});

const { log } = require("console");
// Promise Object represent the eventual completion (or failure) of an asynchornous Operation and its resulting value.

const fs = require("fs");
function ReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

ReadFile().then(onDone);

//
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai ", password: "kushal" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Four ---------------------------------------------------------------->

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "chai", password: "445 " });
    } else {
      reject("ERROR");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected.");
  });

// Five ---------------------------------------------------------------->

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "445 " });
    } else {
      reject("ERROR :JS Went Wrong.");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//
// We have to import the fetch from node-fetch.
const fetch = require("node-fetch");
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

// using then catch

const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
