# JAVASCRIPT PRACTICE

A project to document Javascript Fundamental Concepts and code exercises, the goal of this project is to review all JavaScript core features and document the knowledge learned in short summarized text, follow with code examples.

## Attribution

The learning resourse for this project are from the [W3Schoo](https://www.w3schools.com/js/default.asp)l, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript), and the book title JavaScript The Definitive Guide by David Flanagan (6th Edition).

### Introduction

JavaScript is the programming language of the Web. JavaScript is part of the triad of technology that all Web developers must learn: HTML to spefify the content of the web pages, CSS to specify the presentation of the web page, and JavaScript to specify the behavior of the web pages.

### Fundamental

JavaScript is the high-level, dynamic, untyped interpreted programming language that is well-suited to object-oriented and functional programming styles.

### A Tour around Core JS Features

```js
// Anything following double slashes is an English comment.
// Comment are english text that explains the JavaScript code.

// A veriable is a symbolic name for a val.
// Variables are declared with the var keyword

var val;   // Declare a variable name val.

// Value can be assinged to a variable with an = sign
val = 5;   // Now variable val has the value 5
val        // => 5: the output of val after evaluates to its value

// JavaScript supports serveral types of values
val = 1;                           // Numbers.
val = 0.01;                        // One Number type for interger and real number.
val = "Hello World";               // Strings of tevaluet in quotation marks.
val = 'JavaScript';                // String is also work in single  quatation.
val = true;                        // Boolean values.
val = false;                       // The other Boolean value.
val = null;                        // Null is a special value that means "no value".
val = undefined;                   // Undefined is like null.

```

Two other important types of JavaScript are **object** and **arrays**.

```js
// JavaScrip's most important data type is the object.
// An object is a collection of name/value pairs, or a tring to value map.

var car = {                         // Objeces are enclosed in curly braces.
   year: 2019,                      // The property year has the value 2019
   make: 'Toyota',                  // The property make has the value 'Toyota'
   model: '4Runner SR5',
   color: 'Silver'
};

// To access the object data use . or []:
car.year                            // => 2019
car.make                            // => 'Toyota'
car.model                           // => '4Runner SR5'
car['Silver']                       // => true: another way to access property values.
car.price = '$29,000';              // Create new properties by assignment.
car.owner = {};                     // {} is an empty object with no properties.

// JavaScript also supports arrays (numerically indexed lists) of values:
var primes = [2, 3, 5, 7, 11, 13];  // An array of 6 values.
primes[0]                           // => 2: the first elment (index 0) of the array.
primes.length                       // => 6: the number of elements in the array.
primes[primes.length-1]             // => 13: the last element of the array.
primes[3] = 19;                     // assign new value 19 to index 3.
primes[3] = 'Hello Array';          // replace index 3 with string 'Hello Array'.
var empty = [];                     // declare the a new array empty with no elements.
empty.length                        // => 0: the array has no value

// Arrays and objects can hold other array and objects:
var graph = [                       // An array with 2 elements.
   {x:3, y:-3},                     // Each element is an object.
   {x:-5, y:8}
];

var vaccine = {                        // An object with 2 properties
   trial1: [ [1, 2, 3], [4, 5, 6] ],   // The value of each propery is an array.
   trial2: [ [1, 2, 3], [4, 5, 6] ]    // The elements of the arrays are arrays.
};
```

### Expression & Statements in JavaScript

The most common ways to form expressions in JavaScript is to use operators. Roughly, an expression is the smalless operation that computes a value but doesn't do anything: it doesn't alter the programe state in any way.

If the phrases of JavaScript are expressions, then the full sentences are statements, JavaScript code lines the end with semincolons are statements. In some code block JavaScript statements do not end with semincolons. There is actually a lot of overlap between statements and expressions. The other broad catergory of statement is ***control structures***, such as conditionals and loops.

```js
// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are the most common:
300 + 250                           // => 550: addition
550 - 300                           // => 250: subtraction
50 * 11                             // => 550: multiplication
550 / 2                             // => 275: division

points[1].x - points[0].x           // => 1: more complicated operands also work

'5' + '3'                           // => '53': + operator, concatenates strongs

// JavaScript defines some shorthand arimethic operators
var count = 0;                      // Define a variable
count++;                            // Increment the variable
count--;                            // Decrement the variable
count += 2;                         // Add 2: same as count = count + 2;
count *= 2;                         // Multiply by 2: same as count = count * 2;
count                               // => 6: variable names are expressions, too.

// Equality and relational operators test whether two values are equal, unequal, less than,
// greater than, and so on. They evaluete to true or false.
var a = 2, b = 3;                   // These are assignment, not equality tests

a == b                              // => false: equality
a != b                              // => true: inequality
a < b                               // => true: less-than
a <= b                              // => true: less-than or equal
a > b                               // => false: greater-than
a >= b                              // => false: greater-than or equal
'two' == 'three'                    // => false: the two strings are different
'two' > 'three'                     // => true: 'tw' is alphabetically greater than 'th'
false == (a > y)                    // => ture: false is equal to false, a > y = false

// Logical operators combine or invert boolean values
(a == 2) && (b == 3)                // => true: both comparisons are true. && is AND
(a > 3) || (b < 3)                  // => false: neither comparison is true. || is OR
!(x == y)                           // => true: ! inverts a boolean value
```

### Function in JavaScript

A function is a named and parameterized block of JavaScript code that you define once, and can then invole over and over again.

Examples of functions:

```js
// Functions are parameteried blocks of JavaScript code that we can invoke.
function addNum(a) {                // Define a function named 'addNum' with parameter 'a'
   return a + 5;                    // Return a value 5 larger than the value passed in
}                                   // Functions are enclosed in curly braces

addNum(b)                           // => 8: b is 3, so this invocation return 3+5

var square = function(a) {          // Functions are values and can be assigned to vars
   return a * a;                    // Compute the function's value
};

square(addNum(b))                   // => 64: invoke two functions in one expression
```

### JavaScript Methods

When combine function with objects, we get methods:

```js
// When function are assigned to the properties of an object, we call them "methods".
// All JavaScript objects have methods:
var a = [];                         // Declare an empty array

a.push(1, 2, 3, 4, 5);              // The push() method adds elements to an array

a.reverse();                        // [1,2,3].reverse(); reverse the order of elements
```

```js

// We can define our own methods, too. The 'this' keyword refers to the object
// on which the method is defined: in this case, the points array from above.
graph.dist = function() {
   var p1 = this[0];                // First element of array we're invoked on
   var p2 = this[1];                // Second element of the "this" object
   var a = p2.x - p1.x;             // Difference in X coordinates
   var b = p2.y - p1.y;             // Difference in Y coordinates
   return Math.sqrt(a * a) + (b * b);     // Math.sqrt() computes the square root (Pythagorean theorem)
};

graph.dist();                       // => 1.414: distance between the 2 points

```

Here are some functions whose bodies demonstrade common JavaScript control structure statemens:

```js
// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) {                   // A function to compute the absolute value
   if (x >= 0) {                    // the if statement...
      return x;                     // executes the code if the expression is true
   } else {                         // The optional else clause executes its code if the x is false
      return -x;                    // return x is false
   }
}                                   // note the return statement nested inside if/else.
```

```js
function factorial(n) {                // A function to compute factorials
   var product = 1;                    // Start with a product of 1
   while(n > 1) {                      // Repeat statements in {} while expr in () is true
      product *= n;                    // Shortcut for product = product * n;
      n--;                             // Shortcut for n = n - 1;
   }
   return product;                     // Return the product
}
factorial(4)                           // => 24: 1*4*3*2
```

```js
function factorial2(n) {               // Another version using a different loop
   var i, product = 1;                 // Start with 1
   for (i = 2; i <= n; i++)            // Automatically increment i from 2 up to n
      product *= i;                    // Compute this each time. {} not needed for 1-line loops
   return product;                     // Return the factorial
}
factorial2(5)                          // => 120: 1*2*3*4*5
```

### JavaScript is an Object-Oriented Language

Here are some examples:

```js
// Define a constructor function to initialize a new Point object
function Point(x, y) {                 // By convention, constructors start with capitals
   this.x = x;                         // this keyword is the new object being initialized
   this.y = y;                         // store function arguments as object properties
}                                      // No return is nessary

// Use a constructor function with the keyword "new" to create instances
var p = new Point(1, 1);               // The geometric point (1, 1)

// Define methods for Point objects by assigning them to the prototype
// object associated with the constructor function.
Point.prototype.r = function() {
   return Math.sqrt( (this.x * this.y) + (this.y * this.y) ); // Return the square root of x + y
};

// Use a constructor function with the keyword "new" to create instances
var p = new Point(1, 1);   // The geometric point (1, 1)

```


