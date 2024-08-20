// What is JavaScript?
// Highlevel language
// Multi paradigm
// Single Threaded
// Dynamic Programming Language
// Multipurpose

// sequence
// decision/ selection
// loop

// let x = 5;
// console.log(x);

// function number(x){
//     return x;
// }
// number(5);

// class Number {
//     number(x){
//         return x;
//     }
// }
// y = new Number();
// y.number();

// int x = 5;

// let name = 23;
// console.log(name);
// alert("ALERT");
// console.log("Hello World;");

// console.log(2 > 5);
// alert("Hello World");
// document.write("<h1>Hello World</h1>");

// UI/UX
// Frontend
// Backend
// Database

[
  {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "NY",
    },
    phoneNumbers: ["123-456-7890", "987-654-3210"],
  },
];

// Data Types
// String         "faizan994181", 'faizan'
// Integer        +1,2,3 | -1,-2,-3, 23.3455
// Boolean          true / false

// Array          [1,2,3,4,5]
// Objects        {name: "faizan"}

// what are variables

// let, const, var
// variable name          muhammadFaizanMustafa
// =
// value

let age = 22;
const name = "faizan";
console.log(typeof age);
// console.log(age);
age = 34;
// console.log(age);
// name = "ali";
// console.log(name);

// =
// ==     2 == 2
// ===    2 === 2

// +,-,/,*,%

//? 1. Find the area of a rectangle where the length is 5 and the width is 8.

const length = 5;
const width = 8;

const areaRec = length * width;
console.log("Area of a rectangle is ", areaRec, "sq");

//? 2. Find the area of a triangle where the base is 4 and the height is 3.

const base = 4;
const height = 3;

const areaTri = base * height * (1 / 2);
// const areaTri = base * height * 0.5;
console.log("Area of traiangle is", areaTri, "sq");

//? 3. Find the area of a circle where the radius is 3.
const radius = 3;
const PI = 3.14;
const areaCircle = PI * radius ** 2;
console.log(areaCircle);

//? 4. Convert temperatures from Celsius to Fahrenheit and Fahrenheit to Celsius
let celsius = 46;
let toFahrenheit = (9 / 5) * celsius + 32;
// console.log(toFahrenheit, "F");
document.write(toFahrenheit, "F");

let fahrenheit = 46;
let toCelsius = fahrenheit - 32 * (5 / 9);
// console.log(toCelsius, "C");
// alert(toCelsius, "C");

//* Decision Making
// truthy = all the values other than falsy values
// falsy = false, 0, -0, 0n, "", null, undefined, NaN

// Conditional Operators
// >
// <
// >=
// <=
// !=
// !==
// ==
// ===

// if else
let userAge = 15;

// if(condition){
//   code
// }

if (userAge >= 18) {
  console.log("Eligible");
}else {
  console.log("Not Eligible");
}
// if (userAge >= 18) console.log("Eligible")
// else console.log("Not Eligible");

let userInput = 4;
if (userInput === 1) {
    console.log("Monday");
} else if (userInput === 2) {
    console.log("Tuesday");
} else if (userInput === 3) {
    console.log("Wednesday");
} else if (userInput === 4) {
    console.log("Thursday");
} else if (userInput === 5) {
    console.log("Friday");
} else if (userInput === 6) {
    console.log("Saturday");
} else if (userInput === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid week day")
}

// Logical Operators
// AND &&
// OR ||
// NOT !

// Ternary operator

let result = userAge >= 18 ? "Eligible" : "Not Eligible";
console.log(result);

//? 1.Check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
let num1 = 50;
let num2 = 13;
let sum = num1 + num2;

if (num1 === 50 || num2 === 50 || sum === 50) {
    console.log("true")
} else console.log("false");

// AND && *
// a | b | c
// 1    0   0 = 0


// OR || +
// a | b | c
// 1   0   0 = 1


// NOT !

if(!0) console.log("Hello World");


// Input values
let hoursWorked = 45; // Total hours worked this week
let hourlyRate = 20; // Hourly pay rate

// Validate inputs
if (hoursWorked < 0 || hourlyRate <= 0) {
    console.error("Hours worked and hourly rate must be positive.");
} else {
    let regularPay = Math.min(hoursWorked, 40) * hourlyRate;
    let overtimePay = 0;

    // Calculate overtime pay if hours worked is more than 40
    if (hoursWorked > 40) {
        overtimePay = (hoursWorked - 40) * hourlyRate * 1.5; // 50% more than the regular rate
    }

    let totalPay = regularPay + overtimePay;

    console.log(`Regular Pay: $${regularPay.toFixed(2)}`);
    if (overtimePay > 0) {
        console.log(`Overtime Pay: $${overtimePay.toFixed(2)}`);
    }
    console.log(`Total Pay: $${totalPay.toFixed(2)}`);
}


