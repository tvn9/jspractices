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
```
