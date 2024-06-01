function kushalsAsyncfunction() {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hi there");
    }, 1000);
  });
  return p;
}

// function main() {
//   kushalsAsyncfunction().then(function (value) {
//     console.log(value);
//   });
// }

async function main() {
  //  no callbacks , no .then syntax
  let value = await kushalsAsyncfunction();
  console.log("hi there");
  console.log(value);
}

main();
console.log("after main");
