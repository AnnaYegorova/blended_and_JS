// const obj = {
//   name: "Bobby",

//   sayHello() {
//     console.log(this);
//   },
// };

// // obj.sayHello();
// const fn = obj.sayHello.bind(obj);
// fn();
// console.log(fn());

// console.log(this);

// === github ex1
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   getStones() {
//     return this.stones;
//   },
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.getStones());

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// ===github ex2

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };
//     contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// ===== kahoot
// function foo() {
//   console.log(this);
// }
// foo(); //"use strict" uderfind

// ===
// const obj = {
//   foo() {
//     console.log(this); // obj
//   },
// };
// obj.foo();

// ==="use strict"

// function foo() {
//   console.log(this); // obj
// }

// const obj = {
//   logCtx: foo,
// };

// obj.logGtx();

// ===
// const foo = () => console.log(this); // underfined
