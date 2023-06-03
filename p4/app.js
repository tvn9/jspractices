// Learning about string
const firstName = 'Thanh';
const lastName = 'Nguyen';
let job = 'Programmer';
const birthYear = 1970;
const currentYear = 2023;
let age = currentYear - birthYear;

const tnguyen = "I'm " + firstName + " " + lastName;

console.log(tnguyen);
console.log(firstName, lastName + ' is ' + age + ' years old, ' + 'he is a ' + job + '!');

// Using template literal
const tnguyen2 = `${firstName} ${lastName} is ${age} years old, he is a ${job}!`;

console.log(tnguyen2);
