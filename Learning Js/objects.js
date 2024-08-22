// Objects

let student = {
  // properties
  name: "Faizan Mustafa",
  year: 2002,
  cnic: 0284091284,
  address: {
    city: "Lahore",
    street: 41,
  },
  phoneNo: ["+92937259273", "kjsakjbkasbc"],
  // method
  calcAge() {
    return 2024 - this.year;
  },
};
// const { city } = student.address;
// console.log(city);
// console.log(student.name);
// console.log(student["name"]);

// console.log(Object.keys(student));
// console.log(Object.values(student));

// student.rollNo = "1847404";
// console.log(student, student.calcAge());

// let obj2 = { ...student };
// console.log(obj2);

// let { name, ...rest } = {
//   // properties
//   name: "Faizan Mustafa",
//   year: 2002,
//   cnic: 0284091284,

//   // method
//   calcAge() {
//     return 2024 - this.year;
//   },
// };

// console.log(rest);

// Strings
// "faizan", 'faizan', `faizan`;

let fullname = "Faizan Mustafa";
// ["F", "a", "i", "z", "a", "n"]
// console.log(fullname[0])
// console.log(fullname.slice(0, 6))
// console.log(fullname.length)
// console.log(fullname.includes("z"))

// Template lateral
console.log('Name: student.name and Age: student.calcAge()');
console.log(`Name: ${student.name} and Age: ${student.calcAge()}`);
console.log(`${2} * 1 = ${2 * 1}`);