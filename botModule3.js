//bot block 1
// === 11

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
 let totalPrice=0;
 let world=[];
 world = message.split(" ");
 totalPrice = world.length * pricePerWord ;
return totalPrice;

  // Change code above this line
}
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// === 13
function slugify(title) {
  // Change code below this line
let string;
  string = title.toLowerCase().split(" ").join("-")
return string;

  // Change code above this line
}
//console.log(slugify("Ten secrets of JavaScript"));

//   === 16
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

let newArray;
newArray = firstArray.concat(secondArray)
return newArray.slice(0, maxLength);


  // Change code above this line
}
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));

// ===18
function calculateTotal(number) {
  // Change code below this line
   let sum=0;
   for(let i=1; i<=number; i+=1){
   sum +=i;}
  return sum;
   // Change code above this line
 }
//    console.log(calculateTotal(3));

//   === 18
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//     if (product.name === productName){ 
//     return product.price} 
//      } 
//      return null
  
//     // Change code above this line
//   }
// console.log(getProductPrice("Grip"));
//  === 19
//  const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {
//     // Change code below this line
//     let arrayValues = [];
//     const keys=Object.keys(products);
//     console.log("~ keys", keys)
//     const values = Object.values(products);
//     console.log("~ values", values)
  
//     for(const key of keys){
//     if (key === propName ){
//     arrayValues.push(values)
//     }
//     } return values;
//     // Change code above this line
//   }
//   console.log(getAllPropValues("quantity"));
//===19
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const arrayValues =[];
  for (const product of products){
    if(product.hasOwnProperty(propName)){
    arrayValues.push(product[propName])}
  }
 return arrayValues;
  // Change code above this line
}
//console.log(getAllPropValues("quantity"));


//===41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
      for(const potion of this.potions){
        if(potion.name === newPotion.name){
        return `Error! Potion ${newPotion} is already in your inventory!`} 
      }
      this.potions.push(newPotion)
   // if (this.potions.includes(newPotion)) {
   //   return `Error! Potion ${newPotion} is already in your //inventory!`;
 //   }

  //  // this.potions.push(newPotion);
  },
  // removePotion(potionName) {
  //   const potionIndex = this.potions.indexOf(potionName);

  //   if (potionIndex === -1) {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1);
  // },
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Change code above this line
};
//   console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//   console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 780}));
//   console.log(atTheOldToad.getPotions());
