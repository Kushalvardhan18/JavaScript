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
  }
}
