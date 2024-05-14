function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  console.log(ans);
}
function findSumTill100() {
  return findSum(100);
}

setTimeout(findSumTill100, 10000);
console.log("Hello ");

console.log("kushal");

// fs.readFile

const fs = require("fs");
// filesystem module
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("hi kus");
// Fetch
