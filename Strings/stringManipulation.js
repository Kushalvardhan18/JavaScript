function findLength(data) {
  console.log(data.length);
}
findLength("Kushal Vardhan");

function findIndexof(data, target) {
  console.log(data.indexOf(target));
}
findIndexof("Kushal Vardhan", "Vardhan");

function findIndexof(data, target) {
  console.log(data.lastIndexOf(target));
}
findIndexof("Kushal Vardhan Madhu Vardhan", "Vardhan");

function slicing(data, start, end) {
  console.log(data.slice(start, end));
}
slicing("Kushal Vardhan", 0, 5);

function repFn(data) {
  console.log("Original Data :" + data);
  console.log(data.replace("Barpagga", "Vardhan"));
}
repFn("Madhu Barpagga");

function splitFn(data) {
  console.log("Original Data :" + data);
  console.log(data.split(" "));
}
splitFn("I am a software Developer");

const value = "          kushal vardhan           ";
console.log(value.trim());
