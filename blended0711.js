// === Blended Алена 07.11.21

// ===1
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// // Result: ["a", "b", "c", 0, 1, 2, 3];

// let array = [];
// //array = [...a,c,b[0], ...b[1]]
// array = a.concat(c,...b);
// console.log(array);

// ===2

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
//Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// const b = a;

// b.splice(3, 3, a[0], a[1], a[2])
// console.log("~ b", b)
// const result = [...a]
// result.splice((3, 3, result[0], result[1], result[2]));
// console.log("~ result", result)
// a.copyWithin(3,0,3)
// console.log(a);

// === 3

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];
// отработка с слайс
// const result = [...a.slice(0,5), 0, 0, 0, ...a.slice(-2)]
// отработка с сплайс
// const result = [...a]
// result.splice(5, 3, 0,0,0)
// console.log("~ result", result)
// const b=a;
// b.fill(0,5,8)
// console.log(b);

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// function firstNonConsecutive(array){
// for(let i=0; i<array.length-1; i+=1){
// if((array[i+1]-array[i])!==1){
//     return `Этот ${array[i+1]} не последовательный`
// }
// } return null;
// }
//второй вариант

// function firstNonConsecutive(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] + 1 !== arr[i + 1]) return arr[i + 1];
// 	}
// 	return null;
// }

// console.log(firstNonConsecutive([1,2,3,4,5,6]));

// === массивы

// const a = [1, 2, [3, 4], [5, 6], 7]
// const result=[]
// for(const arg of a){
//     if(Array.isArray(arg)){
//       result.push(arg[0])
//       result.push(arg[1])
//     } else {result.push(arg)}

// }
// console.log(result);
// const c = a.flat();
// console.log(c);

// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.
// function convert(...args) {
//   let result = [];
//   for (let i = 0; i < args.length; i += 1) {
//     if (typeof args[i] === "string") {
//       result.push(Number(args[i]));
//     } else {
//       result.push(String(args[i]));
//     }
//   }
//   return result;
// }
// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(-12345) returns -54321

// function reverseNumber(number){
//     let array = [];
//     const str =  String(number)

//     if(number<0){
//         for(let i=str.length-1; i>0; i-=1){
//         array.push(str[i])
//     }
//     return `${str[0]}${array.join("")}`}
//     else {
//         for(let i=str.length-1; i>=0; i-=1){
//             array.push(str[i])
//         }
//         return `${array.join("")}`}
// }
// === второй вариант
// function reverseNumber(number) {
//   let array = [];
//   const str = String(number);
//   if (number >= 0) {
//     for (let i = str.length - 1; i >= 0; i -= 1) {
//       array.push(str[i]);
//     }
//     return array.join("");
//   } else {
//     for (let i = str.length - 1; i > 0; i -= 1) {
//       array.push(str[i]);
//     }
//     return -1 * array.join("");
//   }
// }

// console.log(reverseNumber(-12345));

// function reverseNumber(num) {
//     // console.log(num)

//     let u = num         //запись параметра функции в переменную
//     u = u.toString()    //Преобразование переменной в строку.

//     let string='';      // обьяваление переменной результата(пустая строка)
//     for (let i = u.length -1; i >= 0 ; i -= 1) {  //цыкл перебора символов, начиная от последнего, до 0 с
//                                                  //шагом -1.
//         string += u[i]                           // в каждой итерации пристваиваем по 1 символу в наш
//     }                                            // результат переменная string
//     console.log(Number(string))                  //переводим нашу строку в число и выводим результат.
//     return string;

// }

// reverseNumber(123456789)

// === Задача от Алёны
// makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// makeListFromRange([8, 5]) // [5, 6, 7, 8]

// function makeListFromRange(arr) {
//   let result = [];
//   if (arr[0] < arr[1]) {
//     for (let i = arr[0]; i <= arr[1]; i += 1) {
//       result.push(i);
//     }
//   } else {
//     for (let i = arr[1]; i <= arr[0]; i += 1) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(makeListFromRange([2, 7]));
// console.log(makeListFromRange([8, 5]));

// Den Ven

// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// const d = [...a, c, ...b];
// const d = [...a, c, b[0], ...b[1]]; ///решение
// console.log(d);

// Result: ["a", "b", "c", 0, 1, 2, 3];

/// ==================================================

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const result = a.splice(3, 3, a[0], a[1], a[2]);

// const result = [...a];
// result.splice(3, 3, result[0], result[1], result[2]);

// const result = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];

// console.log(result);

// a.copyWithin(3, 0, 3);
// console.log(a);

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

//// =========================================================
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = [...a.slice(0, 5), 0, 0, 0, ...a.slice(-2)];

// const result = [...a];
// result.splice(5, 3, 0, 0, 0);

// const b = a;
// b.fill(0, 5, 8); /// конечный индекс не включается

// console.log(b);

// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// =================================================================

// Your task is to find the first element of an array
// that is not consecutive.

// By not consecutive we mean not exactly 1 larger
// than the previous element of the array.

// E.g.If we have an array[1, 2, 3, 4, 6, 7, 8] then 1
// then 2 then 3 then 4 are all consecutive but 6 is not,
// so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements and all
// elements will be numbers.The numbers will also all be
// unique and in ascending order.The numbers could be
// positive or negative and the first non - consecutive
// could be either too!

// function firstNonConsecutive(array){
//     for(let i = 0; i < array.length-1; i += 1){
//     if((array[i + 1] - array[i]) !== 1){
//             return array[i + 1];
//         }
//     }
//     return null;
// }
// console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + 1 !== arr[i + 1]) return arr[i + 1];
//   }
//   return null;
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]));

//==================================================================

// const a = [1, 2, [3, 4], [5, 6], 7];

// const result = a.flat();

// // for (const arg of a) {
// //     if (Array.isArray(arg)) {
// //         result.push(arg[0]);
// //         result.push(arg[1]);
// //     }
// //     else {
// //         result.push(arg)
// //     }
// // }

// console.log(result);

//===================================================================

// Write a function that converts the argument values. If it will be a string,
// convert it to number and wise versa.
// It should return an array of converted values.

// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function convert(...args) {

//     let newArr = [];

//     for (let i = 0; i < args.length; i += 1) {
//         if (typeof args[i] === "string") {
//             newArr.push(Number(args[i]));
//         } else {
//             newArr.push(String(args[i]));
//         }
//     }
//     return newArr;
// }

// console.log(convert('1', 2, 3, '4', 5, '7'));

// === Новые задачи на 21.11.21
// 1. Напишите функцию, которая выполняет итерацию по массиву и выполняет функцию
// для каждого элемента.

// executeforEach ([1,2,3], function (el) {console.log (el * 2)}) // 2 4 6

// function executeforEach(arr, callback) {
//   for (let el of arr) {
//     el = Number(el);
//     callback(el);
//   }
// }
// executeforEach([1, 2, 3], function (el) {
//   console.log(el * 2);
// });

// 2. Функция записи, которая возвращает преобразованный массив на основе функции, переданной в
// качестве второго
//параметра (обратный вызов). Если массив содержит число в виде строки,
//он должен преобразовать его и вернуть как число.
//При необходимости вы можете изменить тело этой функции обратного вызова. Повторно
// использовать функцию из задачи 1.

// mapArray ([2, '5', 8], function (el) {return el + 3}) // возвращает [5, 8, 11]

function executeforEach(arr, callback) {
  for (let el of arr) {
    callback(el);
  }
}
function mapArray(arr, callback) {
  executeforEach(arr, (elem) => callback(Number(elem)));
}

// mapArray([2, "5", 8], function (el) {
//   return console.log(el + 3);
// });

// executeforEach([1, 2, 3], function (el) {
//   console.log(el * 2);
// });

// 3. Написать функцию, которая возвращает отфильтрованный массив на основе функции,
//  переданной в качестве параметра. Повторно использовать функцию из задачи 1.

// filterArray ([2, 5, 8], функция (el) {return el% 2 === 0})
// // возвращает [2, 8]

// function filterArray(arr, callback) {
//   let newArr = [];
//   executeforEach(arr, (elem) => {
//     if (callback(elem)) {
//       newArr.push(elem);
//     }
//   });
//   return newArr;
// }
// console.log(
//   filterArray([2, 5, 8], function (el) {
//     return el % 2 === 0;
//   })
// );

// 4. Напишите функцию, которая принимает массив объектов и возвращает новый массив значений
//  по переданному имени ключа.
// Эта функция не должна изменять исходный массив. Повторно использовать функцию из задачи 1.
// возвращает ['яблоко', 'ананас']

// const fruits = [
//   { name: "apple", weight: 0.5 },
//   { name: "pineapple", weigth: 2 },
// ];

// function getArrayOfKeys(arr, key) {
//   let newArr = [];
//   executeforEach(arr, (elem) => {
//     newArr.push(elem[key]);
//   });
//   return newArr;
// }
// console.log(getArrayOfKeys(fruits, "name"));

// 5. Напишите функцию substitute (), которая принимает массив чисел и заменяет все числа
// меньше 20 и больше 10 на '*'. Он должен вернуть новый массив с числами и '*' вместо этих чисел.
//  Повторно использовать функцию из задачи 2.

// замените ([58, 14, 48, 12, 31, 19, 10]);
// // возвращает [58, '*', 48, '*', 31, '*', 10]

function substitute(arr) {
  let newArr = [];
  mapArray(arr, (a) => {
    if (a > 10 && a < 20) {
      a = "*";
    }
    newArr.push(a);
  });

  return newArr;
}

// console.log(substitute([58, 14, 48, 12, 31, 19, 10]));

// 6. Напишите функцию, которая возвращает номер дня, который был несколько дней назад с
// прошедшей даты.
// Это не должно изменять указанную дату источника.

const date = new Date(2020, 0, 2);

function getPastDay(date, days) {
  const ONEDAY_IN_MS = 86400000;
  const dateNow = date.getTime();
  const dateBefore = dateNow - ONEDAY_IN_MS * days;

  const newDate = new Date(dateBefore);

  const newDate1 = new Date(dateBefore).toLocaleString("en", {
    // year: "numeric",
    month: "short",
    // day: "numeric",
  });
  return `${newDate.getDate()}, (${newDate.getDate()} ${newDate1} ${newDate.getFullYear()})`;
  // `${newDate.getDate()} , ( ${newDate.getDate()} ${
  //   newDate.getMonth() + 1
  // } ${newDate.getFullYear()}) `;
}
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2020)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2019)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2019)

// getPastDay(date, 1); // 1, (1 Jan 2020)
// getPastDay(date, 2); // 31, (31 Dec 2019)
// getPastDay(date, 365); // 2, (2 Jan 2019)

// // const date = новая дата (2020, 0, 2);
// getPastDay (дата, 1); // 1, (1 января 2020 г.)
// getPastDay (дата, 2); // 31, (31 декабря 2019 г.)
// getPastDay (дата, 365); // 2, (2 января 2019 г.)

// 7. Напишите функцию, которая форматирует дату в формате «ГГГГ / ММ / ДД ЧЧ: мм».

// formatDate (новая дата ('15.06.2019 09:15:00')) // «15.06.2018 09:15»
// formatDate (new Date ()) // "2020/04/07 12:56" // получает текущее местное время

// 7. Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// formatDate(new Date('6/15/2019 09:15:00')) // "2018/06/15 09:15"
// formatDate(new Date()) // "2020/04/07 12:56" // gets current local time

function formatDate(date) {
  const nowDate = new Date();
  let year;
  if (date.toString() === nowDate.toString()) {
    year = date.getFullYear();
  } else {
    year = date.getFullYear() - 1;
  }
  return ` ${year}/${String(date.getMonth() + 1).padStart(2, 0)}/${String(
    date.getDate()
  ).padStart(2, 0)} ${String(date.getHours()).padStart(2, 0)}:${String(
    date.getMinutes()
  ).padStart(2, 0)}`;
}
// console.log(formatDate(new Date()));
// console.log(formatDate(new Date("2020/04/07 12:56")));
// console.log(formatDate(new Date("6/15/2019 09:15:00")));

// // !!! Использование встроенных методов массива или объекта (кроме методов push, length и date) запрещено !!!

// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
//   getRate() {
//     return this.rate;
//   }
//   getDays() {
//     return this.days;
//   }
//   setRate(newRate) {
//     this.rate = newRate;
//   }
//   setDays(newDays) {
//     this.days = newDays;
//   }
// }

// // Вот так должен работать наш класс:

// const worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// // // С помощью нашего класса создайте двух рабочих

// // Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и
// // для свойства
// //  days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:

// // var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// // //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

//  Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который
//  параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
//  который параметром
//   принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод
// ucWords, который
//    принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//   constructor(string) {
//     this.string = string;
//   }
//   reverse(string) {
//     return string.split("").reverse().join("");
//   }
//   ucFirst(string) {
//     const s = string[0].toUpperCase();
//     const strENd = string.slice(1, string.length);
//     return s + strENd;
//   }
//   ucWords(string) {
//     const arrOfWords = string
//       .split(" ")
//       .map((el) => el[0].toUpperCase() + el.slice(1, string.length))
//       .join(" ");
//     return arrOfWords;
//   }
// }
// Наш класс должен работать так:

// const str = new MyString();

// console.log(str.reverse("abcde")); //выведет 'edcba'
// console.log(str.ucFirst("abcde")); //выведет 'Abcde'
// console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'

//  Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет
// метод isEmail
//  параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
// Если является - возвращает true,
//  если не является - то false. Кроме того, класс будет иметь следующие методы: метод
//  isDomain для проверки домена,
//  метод isDate для проверки

// class Validator {
//   constructor(string) {
//     this.string = string;
//   }
//   isEmail(string) {}
// }

// const validator = new Validator();

// console.log(validator.isEmail("phphtml@mail.ru"));
// console.log(validator.isDomain("phphtml.net"));
// console.log(validator.isDate("12.05.2020"));
// console.log(validator.isPhone("+375 (29) 817-68-92")); //тут можете формат своей страны

// === 21.11.21

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition.
//  But you must calculate only positive numbers and omit negative if any presents.

// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// const positiveSum = (arr) =>
//   arr.filter((el) => el > 0).reduce((total, el) => total + el, 0);
// const positiveSum = (arr) =>
//   arr.reduce((total, el) => (el > 0 ? total + el : total), 0);
// console.log(positiveSum([0, -3, 5, 7]));

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences
// the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = (word, letter) =>
//   word
//     .toLowerCase()
//     .split("")
//     .filter((el) => el === letter).length;

// const letterCount = (word, letter) =>
//   word
//     .toLowerCase()
//     .split("")
//     .reduce((acc, el) => (el === letter ? acc + 1 : acc), 0);
// console.log(letterCount("Maggy", "g"));
// console.log(letterCount("", "z"));
// console.log(letterCount("Barry", "b"));

// === task
// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// const countPoints = (arr) => arr.split("");
// console.log(
//   countPoints([
//     "3:1",
//     "1:0",
//     "0:0",
//     "1:2",
//     "4:0",
//     "2:3",
//     "1:1",
//     "0:1",
//     "2:1",
//     "1:0",
//   ])
// );
// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// ===

// getSums([1, 2, 3, 4, 5])
//результат [1,3,6,10,15]
