let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("success");
  } else {
    reject("error");
  }
});

//
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
