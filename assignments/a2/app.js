"use strict";

// Data types
// Number = 9
// String = 'First Name';
// Boolean = true or false;
// Undefined = 'empty value';
// Null = null;
// Symbol = Value that is unique and cannot be changed
// BigInt = larger interger 
// JavaScript also support dynamic data types
// JavaScript comments start with the double forward slats '// This the single line comment' or '/* Multiline comment */

// Assignment 
// Declare a veriable called 'isIsland' and set its value according to your country. 
// The variable should hold a Boolean value.
// Also declare a variable 'language', but don't assign it any value yet
// Logthetypesof'isIsland','population','country'and'language' to the console

// Declare variable called 'country', 'continent', and 'population'
const unitedState = 'United States of America';
const continent = 'North America';
const population = 334233854;

const isIsland = false;
let language;

language = 'English';

console.log('The country is', unitedState);
console.log('The population', population);
console.log('The country main language is', language);
console.log('Is the United States an island?', isIsland);

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(`Mark's BMI is:`, BMIMark);
console.log(`John's BMI is:`, BMIJohn);
console.log(`Mark's BMI is heigher than John's BMI?`, markHigherBMI);