// ===13
function slugify(title) {
  // Change code below this line

  return title.toLowerCase().split(" ").join("-");
  // Change code above this line
}
// console.log(slugify("Arrays for begginers"));

// ===16

function makeArray(firstArray, secondArray, maxLength) {
  return firstArray.concat(secondArray).slice(0, maxLength);
}
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

// ===18
function calculateTotal(number) {
  // Change code below this line
  let total = 0;
  for (let i = 1; i <= number; i += 1) {
    total += i;
  }
  return total;

  // Change code above this line
}
// console.log(calculateTotal(4));

// ===21
function findLongestWord(string) {
  // Change code below this line
  let arrLength = [];
  let maxLengthWord = "";
  arrLength = string.split(" ");
  console.log(arrLength);

  for (let i = 0; i < arrLength.length; i += 1) {
    if (maxLengthWord.length < arrLength[i].length) {
      maxLengthWord = arrLength[i];
    }
  }
  return maxLengthWord;
  // Change code above this line
}
//console.log(findLongestWord("Google dooooo0 a roll thiiingsz"));

// ===22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i < max + 1; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

// console.log(createArrayOfNumbers(29, 34));

// === 24
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit);

  // Change this line
}

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));

// ===25
function getCommonElements(array1, array2) {
  // Change code below this line
  let newArr = [];
  for (const a2 of array2) {
    for (const a1 of array1) {
      if (array2.includes(a1)) {
        newArr.push(a1);
      }
    }
    return newArr;
  }

  // Change code above this line
}
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// ===32
function includes(array, value) {
  // Change code below this line
  for (const el of array) {
    if (el === value) {
      return true;
    }
  }
  return false;

  // Change code above this line
}
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(includes([1, 2, 3, 4, 5], 17));
