class Animal {
  // Atrributes
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  // Function
  static myType() {
    console.log("Animal");
  }
  speak() {
    console.log("hi there " + this.speaks);
  }
  animalName() {
    console.log("hi there " + this.name);
  }
  AnimalLegCount() {
    console.log("hi there " + this.legCount);
  }
}

console.log(Animal.myType());
let dog = new Animal("dog", 4, "bhaw bhaw");
let cat = new Animal("cat", 10, "meow meow");
dog.speak();
dog.animalName();
dog.AnimalLegCount();
