// DRY Don't repeat yourself
// Functions
// Functions with parameters and arguments
// Functions with default parameters and arguments

// global scope
// local scope / block scope
// function scope

// Hoisting
/**
 * var z;
 * console.log(z)
 * z = 4
 *
 * function hello
 *
 * hello()
 */

// let x = 4;
// const y = 4;
// var z = 4;
// console.log(z);

function calcAge(age) {
  // parameter
  let userAge = 2024 - age;
  //   console.log(userAge);
  return userAge;
}
const age = calcAge(2002);
// console.log(age) //arguments
console.log(calcAge(2002));

function calcAge1(age = 2000) {
  // parameter
  let userAge = 2024 - age;
  console.log(userAge);
}
// calcAge1(2004); //arguments

function check50(n1, n2) {
  let num1 = n1; // 20
  let num2 = n2; // 50
  let sum = num1 + num2;

    if (num1 === 50 || num2 === 50 || sum === 50) {
      console.log("true");
    } else console.log("false");

  // if (num1 === 50 || num2 === 50 || sum === 50) {
  //   return "true";
  // } else return "false";
}
console.log(check50(50, 13));
console.log(check50(12, 13));
console.log(check50(100, 0));

//todo: generic functions
function calcProd(n1, n2) {
  return n1 * n2;
}
console.log(calcProd(2, 4));
//todo: function expression
let calcSum = function (n1, n2) {
  return n1 + n2;
};
console.log(calcSum(2, 4));
//todo: arrow functions
// const calcSubtract = (n1, n2) => {
//     return n1 - n2;
// };
const calcSubtract = (n1, n2) => n1 - n2;
console.log(calcSubtract(2, 4));
//todo: anonaymous function
// function (n1, n2) {
//     return n1 + n2;
//   };
//todo: callback function
//todo: IIFE Imediately Invoke function expression
let x = (function divide(n1, n2) {
  return n1 / n2;
})(4,2);
console.log(x)
