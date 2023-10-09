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
