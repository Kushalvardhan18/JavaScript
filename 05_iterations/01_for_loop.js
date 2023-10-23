//  for

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    console.log("5 is Best number");
  }
}

for (let i = 0; i < 10; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`inner loop: ${j}`);
    console.log(i + " * " + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman", "spiderman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// Break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of i is ${index}`);
}
