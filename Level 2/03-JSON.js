const users = '{"name":"kushal","age":"24","gender":"male"}';

const user = JSON.parse(users);
console.log(user["gender"]);

const newUser = {
  name: "Kushal",
  gender: "male",
  age: 24,
};

const finalString = JSON.stringify(user);
console.log(finalString);
