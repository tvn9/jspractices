// Declare colors array
var colors = ['Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White', 'Black'];

// The traditional for loop
for (var i = 0; i < colors.length; i++) {
   console.log(i, colors[i]);
}

// Array forEach() method
colors.forEach(function (element, i) {
   console.log(i, element);
});

