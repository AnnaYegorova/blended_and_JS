const users = [
  { name: "Bob", age: 15 },
  { name: "Ann", age: 16 },
  { name: "Cao", age: 10 },
];

for (const { name, age } of users) {
  // console.log(`${name} is ${age}`);
}

const obj = {
  name: "Bobby",
  age: 13,
  adult: false,
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};
obj.sayHello();
