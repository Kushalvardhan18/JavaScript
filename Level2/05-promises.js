let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("success");
  } else {
    reject("error");
  }
});
