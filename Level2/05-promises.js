let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("success");
  } else {
    reject("error");
  }
});

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

const promiseFive = new Promise(function (resolve, reject) {});