// Loops
// for , while, do while, foreach, for of, for in, map, filter, some, each, reduce, findIndex

// let students = ["Bilal", "Umair", "Hammad"];
// let tableNo = 5;
// for (let i = 0; i < 10; i++) {
//   console.log(`${tableNo} * ${i + 1} = ${tableNo * i + 1}`);
// }

// let index = students.length - 1;
// while (index <= 10) {
//   console.log(`${tableNo} * ${index} = ${tableNo * index}`);
//   index++;
// }
// do {
//   console.log(`${tableNo} * ${index} = ${tableNo * index}`);
//   index++;
// } while (index <= 10);
// while (index >= 0) {
//   console.log(students[index]);
//   //   console.log(`${tableNo} * ${index} = ${tableNo * index}`);
//   index--;
// }

// for in
const person = {
  name: "Faizan",
  age: 22,
  city: "Lahore",
};

const fruits = ["apple", "mango", "orange"];
// for (let prop in person) {
//   console.log(`${prop}: ${person[prop]}`);
// }
// todo: In case of objects prop points to its keys
// for (let prop in fruits) {
//   console.log(fruits[prop]);
// }
// todo: In case of arrays prop points to its indexes

// for of
// for (let prop of fruits) {
//   console.log(prop);
// }
// todo: In case of objects, these are not iterables
// todo: In case of arrays prop points to its values/elements

Object.keys(person).forEach((ele, i, x) => console.log(person[ele]));
