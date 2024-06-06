const myNums = [1, 2, 4, 5, 6, 7, 8, 9, 7, 1, 8];
const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);
