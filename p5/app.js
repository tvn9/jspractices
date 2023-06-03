// Learning type conversion and Coercion

const inputNum = '19'; // keep in mind that this input number is a string

console.log(inputNum + 70); // the out put is 1970 because JavaScript support coercion that convert 70 to string

// On the other hand when substract two string '20' - '10' JavaScript will convert the both string to number
console.log(`'20' - '10'= `, '20' - '10');

// To add input number 19 and 70 we must convert input string to number first

const num = Number(inputNum); // Convert inputNum to Number.

// Now you will see the correct calcution
console.log(`${num} + 70 = `, num + 70); // output 89