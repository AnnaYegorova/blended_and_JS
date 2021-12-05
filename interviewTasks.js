// === Задача на строку
// const str = "4" + "8" - "6" + "1" - "1";
// console.log(str);

// =====task1
// we have call and apply
// create your new bind

// function sayHello(a, b) {
//   console.log(this, a + b);
// }
// const obj1 = { name: "Bobby" };
// const obj2 = { name: "Gary" };

// // const fn1 = sayHello.bind(obj1);
// // fn1(1, 1);

// function myBind(context, callback) {
//   return function () {
//     callback.call(context);
//   };
// }
// const fn2 = myBind(obj1, sayHello);

// fn2();

// === task2
// Prime number
// 1) написать функцию, которая отвечает true or false
// это простое число?
// 2) вариант смотреть числа от 2 до корень из числа
// 3) написать функцию, которая выводит все простые числа до заданного Num

// 1) 1ый вариант
// function isPrime(num) {
//   for (let i = 2; i < num; i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(isPrime(-2));

// 2) 2й вариант
// через корень квадратный
// введем переменную max = Math.sqrt(num)
function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
// console.log(isPrime(2));
//
// 3) функция, которая выводит все простые числа
// function getPrimes(num) {
//   const primeArr = [];
//   for (let i = 2; i <= num; i += 1) {
//     if (isPrime(i)) {
//       primeArr.push(i);
//     }
//   }
//   return primeArr;
// }
// console.log(getPrimes(200));

// вариант с помощью решето Эратосфена
function getPrimes(num) {
  const sieve = [];
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i * 2; j <= num; j += i) {
        sieve[j] = true;
        console.log(sieve[j]);
      }
    }
  }
  return primes;
}
console.log(getPrimes(120));
