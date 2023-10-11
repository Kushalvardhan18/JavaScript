// const tinderUSer = new Object();  //Singleton
const tinderUSer = {}; // non-singleton

tinderUSer.id = "12ab";
tinderUSer.name = "Sammy";
tinderUSer.isLoggedIn = false;
// console.log(tinderUSer);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Kushal",
      lastName: "Vardhan",
    },
  },
};
// console.log(regularUser.fullName);
// console.log(regularUser?.fullName?.userFullName);
// console.log(regularUser?.fullName?.userFullName?.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 3: "a", 4: "b" };
const obj5 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4, obj5);
// Empty {} is the target object and others are sources.
// Objects merged into the target otherwise they will combine to one of the source to form new object.

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 2,
    email: "kv@gmail.com",
  },
  {
    id: 3,
    email: "v@gmail.com",
  },
];
console.log(users[1].email);

console.log(tinderUSer);
console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty("isLoggedIn"));
console.log(tinderUSer.hasOwnProperty("isLogged"));

// Destructuring ---------------------------------------------------------------->
const course = {
  courseName: "javascript",
  price: "1000",
  courseInstructor: "hitesh",
};
// course.courseInstructor
const { courseInstructor: instructor } = course;
// console.log(courseInstructor);
console.log(instructor);
