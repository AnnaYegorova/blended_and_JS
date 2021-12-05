// function isPrime(num) {
//   for (let i = 2; i < num; i += 1) {
//     if (num % i === 0) {
//       console.log(`${num}Not Prime`);
//     } else {
//       console.log(`${num} Prime`);
//     }
//   }
// }

// // console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));

// === task2

// You probably know the "like" system from Facebook and other
//  pages. People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to
//  such an item.

// Implement the function which takes an array containing
// the names of people that like an item. It must
//  return the display text as shown in the examples:

//  []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in
// "and 2 others" simply increases.
function likes(names) {
  let message = "";
  switch (names.length) {
    case 0:
      message = `no one likes this`;
      break;
    case 1:
      message = `${names[0]} likes this`;
      break;
    case 2:
      message = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      message = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
  return message;
}
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Colt"]));

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       onError(pizzaName);
//       console.log(`В ассортименте нет пиццы с названием ${pizzaName}`);
//       return;
//     }
//     onSuccess(pizzaName);
//     return;
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// Вызовы метода с колбэками
pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
pizzaPalace.order("Биг майк", makePizza, onOrderError);
pizzaPalace.order("Венская", makePizza, onOrderError);
