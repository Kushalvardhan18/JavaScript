const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["batman", "superman", "aquaman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const newHeros = marvelHeros.concat(dcHeros);
// console.log(newHeros);

// Spread operator
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// concatinate all sub arrays in to a single array.
const realAnotherArray = anotherArray.flat(Infinity);
const realArray = anotherArray.flat(3);
console.log(realAnotherArray);
console.log(realArray);

console.log(Array.isArray("Kushal"));
console.log(Array.from("Kushal"));

console.log(Array.from({ name: "Kushal" })); //Interesting case from interview point of view.

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Returns a array from the set of elements.
console.log(Array.of(score1, score2, score3));
