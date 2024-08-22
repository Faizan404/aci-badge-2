// Arrays, Objects
// Primitive and Refrence Types
// Mutable and Immutable Data types
/**
    Primitive types
 * Atomic Values
    - number
    - string
    - undefined
    - null
    - boolean

    x = 5     ->          ##
    y = x     ->          ##



    Refrence Types
    - Arrays
    - Objects

    obj1 = {name: "Faizan"}       
                                } ->    ##
    obj2 = obj1
 */

// Arrays
let fruits = ["apple", "mango", "orange"];
// console.log(fruits);
// // length of array: n | 3
// // total index of array: n - 1 | 3 - 1 = 2
// let x = 4;
// if (Array.isArray([])) console.log(true);
// else console.log(false);
// console.log([] instanceof Array);

// console.log(fruits[6]);
// fruits.push("pineapple");
// console.log(fruits);
// fruits.unshift("kiwi");
// console.log(fruits);

// fruits[3] = "Banana";
// console.log(fruits);

// fruits[6] = "Orange";
// console.log(fruits);

// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// let choosenFruits = fruits.slice(0, 3);
// // let choosenFruits = fruits.slice(-3, -1);
// console.log(choosenFruits);

// fruits.splice(2, 3);
// console.log(fruits);

// let [teacher, student, student2, student3] = ["Faizan", "Bilal", "Umair", "Hammad"];
// ... REST OPERATOR
let [teacher, ...student] = ["Faizan", "Bilal", "Umair", "Hammad"];
console.log(student, teacher);
// ... SPREAD OPERATOR
function abc(...args) {
  console.log(args);
}
abc(1, 2, 3, 4, 5, 6);

let staticLanguages = ["C++", "C", "C#", "Java"];
let dynamicLanguages = ["Js", "Python", "PHP", "Ruby"];
let allLanguages = [...staticLanguages, ...dynamicLanguages];
console.log(allLanguages);

// Task
// 1.	Find the last element of an array without giving a hard-coded index.
// 2.	Check whether the first or the last index of an array has a specified value, let's say 5.
// 3.	Make an array to store the names of students and check whether that array has your own name or not and also return the index of that value.
// 4.	Add the array element at the specified index.
// 5.	Delete the array element from the specified index.