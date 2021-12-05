const Animal = function (option) {
  this.name = option.name;
  this.color = option.color;

  // this.voice = function () {
  //   console.log("Base voice from", this.name);
  // };
};

Animal.prototype.voice = function () {
  console.log("Base voice from", this.name);
};

const dog = new Animal({ name: "Rex", color: "#fff" });
// dog.voice();
// console.log(dog.name);
const Cat = function (options) {
  Animal.apply(this, arguments);
  this.hasTail = options.hasTail;
  this.type = "cat";
};
Cat.prototype = Object.create(Animal.prototype);

const cat = new Cat({ name: "Murz", color: "#fff", hasTail: true });
console.log(cat);
