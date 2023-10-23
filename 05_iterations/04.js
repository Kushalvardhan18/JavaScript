const myObject = {
  js: "JavaScript",
  cpp: "C++",
  py: "Python",
};

for (const key in myObject) {
  //   console.log(key);
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "java", "cpp", "python"];
for (const key in programming) {
  console.log(programming[key]);
}
