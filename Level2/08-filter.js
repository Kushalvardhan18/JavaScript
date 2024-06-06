const myNums = [1, 2, 4, 5, 6, 7, 8, 9, 7, 1, 8];
const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book two", genre: "history", publish: 1982, edition: 2001 },
  { title: "Book three", genre: "science", publish: 2001, edition: 2005 },
  { title: "Book four", genre: "non-Fiction", publish: 1188, edition: 2000 },
  { title: "Book five", genre: "science", publish: 1556, edition: 2004 },
  { title: "Book six", genre: "social", publish: 1996, edition: 2005 },
  { title: "Book Seven", genre: "non-Fiction", publish: 2000, edition: 2001 },
  { title: "Book eight", genre: "history", publish: 1993, edition: 1998 },
  { title: "Book nine", genre: "science", publish: 1997, edition: 2001 },
  { title: "Book ten", genre: "Fiction", publish: 1998, edition: 2003 },
];

// const specific = books.filter((book) => book.genre === "history");
const specific = books.filter((book) => {
  return book.publish >= 1993;
});

console.log(specific);
