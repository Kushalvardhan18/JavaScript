const name = "Kushal ";
const age = 22;
console.log(name + age); //Old way of writing should be avoided.

//String Interpolation ----->
console.log(`${name} ${age}`); //Should write in this way instead.

const fullName = new String("Kushal Vardhan");
console.log(fullName);
console.log(fullName[5]);
console.log(fullName.length);

console.log(fullName.charAt(3));
console.log(fullName.indexOf("h"));

const newString = fullName.substring(0, 6);
console.log(newString);

const anotherString = fullName.slice(-8, 10);
console.log(anotherString);

const newStringOne = "      kushal vardhan   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kushal.com/kushal%20vardhan";
console.log(url);
console.log(url.replace("%20", "-"));

console.log(url.includes("kushal"));
console.log(url.split("/"));
