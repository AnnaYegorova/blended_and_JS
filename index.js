//---1
function checkAge(age) {
    let message;
 age>=18 ? message = "You are an adult" : message =  "You are a minor"
 return message;
// { 
//       return "You are an adult";
//     }
//     return "You are a minor";
  }
//   console.log(checkAge(22));  

// ---2
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    }
     return "Access denied, wrong password!";
    // Change code above this line
  }
//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword("jqueryismyjam"));

//---3
function checkStorage(available, ordered) {
    // Change code below this line
    
    if (ordered === 0) {
     return "Your order is empty!";
    } if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";}
   return "The order is accepted, our manager will contact you";
    
    // Change code above this line
  }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
//---9
function getExtremeElements(array) {
    // Change code below this line
  let newArray = [];
  newArray[0] = array[0];
  newArray[1] = array[array.length-1];  
  return newArray;
    // Change code above this line
  
  }
  //console.log(getExtremeElements([1, 2, 3, 4, 5]));