// === 4
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// === 5
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach((item) => (totalPrice += item));

  // Change code above this line
  return totalPrice;
}
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ===6
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
  numbers.forEach((number) => {
    if (number > value) filteredNumbers.push(number);
  });

  // Change code above this line
  return filteredNumbers;
}
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// ===7
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
  // Change code above this line
}
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

const books = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const getUserWithEmail = (users, email) => {
  users.find((user) => user.email === email);
};
// getUserWithEmail("Blackburn Dotson", "blackburndotson@furnigeer.com");



// === 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// console.log("~ eachElementInFirstIsEven", eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);
// console.log("~ eachElementInFirstIsOdd", eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// console.log("~ eachElementInSecondIsEven", eachElementInSecondIsEven);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);
// console.log("~ eachElementInSecondIsOdd", eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// console.log("~ eachElementInThirdIsEven", eachElementInThirdIsEven);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);
// console.log("~ eachElementInThirdIsOdd", eachElementInThirdIsOdd);

// ===35
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime;
// }, 0);

// const totalAverageGamesPlayed = players.reduce((acc, player) => {
//   return acc + player.gamesPlayed;
// }, 0);

// const time = totalAveragePlaytimePerGame / totalAverageGamesPlayed;
// console.log(time);

// ===37
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
// const getTotalFriendCount = (users) => {
//   return users.reduce((acc, user) => [...acc, ...user.friends], []).length;
// };
const getTotalFriendCount = (users) => {
  return users.reduce((acc, item) => {
    return acc + item.friends.length;
  }, 0);
};

// console.log(getTotalFriendCount(users));

const sortByAscendingBalance = (users) => {
  return users.sort((a, b) => a.balance - b.balance);
};
// console.log(sortByAscendingBalance(users));

// ===43
const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// console.log(
//   "~ sortByDescendingFriendCount",
//   sortByDescendingFriendCount(users)
// );

// ===46
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
// console.log(getNamesSortedByFriendCount(users));
// ===47
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort();
};
// console.log(getSortedFriends(users));
// ===48
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((value) => value.gender === gender)
    .reduce((acc, user) => {
      return acc + user.balance;
    }, 0);
};
// console.log(getTotalBalanceByGender(users));
const findFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
console.log(findFriends(users));
