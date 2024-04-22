// Reverse the elements of an array.
const element = [1, 2, 6, 7, 8, 9, 2, 4, 5];
const newElement = [];
for (var i = element.length - 1; i >= 0; i--) {
  console.log(element[i]);
  newElement[element.length - 1 - i] = element[i];
}
console.log(newElement);
