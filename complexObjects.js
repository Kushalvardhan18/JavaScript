const user1 = {
  name: "Kushal",
  age: 18,
  address: {
    village: "Lohakhar",
    postOffice: "Kapahi",
    teh: "Balh",
  },
  Hobbies: ["Coding", "Reading", "Guitar"],
};
const user2 = {
  name: "Madhu",
  age: 18,
  address: {
    village: "Lohakhar",
    postOffice: "Kapahi",
    teh: "Balh",
  },
  Hobbies: ["Coding", "Reading", "Guitar"],
};
const user3 = {
  name: "Kamini",
  age: 18,
  address: {
    village: "Lohakhar",
    postOffice: "Kapahi",
    teh: "Balh",
  },
  Hobbies: ["Coding", "Reading", "Guitar"],
};
const user4 = {
  name: "Radha",
  age: 18,
  address: {
    village: "Lohakhar",
    postOffice: "Kapahi",
    teh: "Balh",
  },
  Hobbies: ["Coding", "Reading", "Guitar"],
};

const users = [user1, user2, user3, user4];
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
