// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:

// Specs:
// input: string
// output: Object, Array, string, number, boolean, or null depending on the string.
// constraints: should receive valid JSON, will not accept trailing commas, doesn't allow single quotes.
// edge cases: functions aren't allowed in JSON -> functions should remain strings if present.

// Justification:
// The intention for this function is to take a string and convert it into JSON.

// Visualization: see parseJSON.drawio

// Approximation:
// Take our string and begin looping through each character.
// If we hit a primitive type (string, number, boolean, or null), we parse that type and return it (explained below).
// For nulls or booleans, check if the completed string is equal to 'true', 'false', or 'null', and return that value.
// For numbers, check if the completed string length is equal to that string converted to an integer and back to a string. (This should account for any stray characters within a number). If it passes, return the integer.
// If all the above fail, return the string.
// If we hit a non-primitive, first we check if it's an array or an object.
// If an array, we parse the primitive(s) and arrays/objects within it
// Keep looping thru characters until we hit a closing bracket, keeping track of the opening bracket index.
// Recur the slice of characters from the opening bracket to the closing bracket, enclosing the result in array brackets.
// If an object, we parse the primitive(s) and arrays/objects within it
// Keep looping thru characters until we hit a closing brace, keeping track of the opening brace index.
// Recur the slice of characters from the opening bracket to the closing bracket, enclosing the result in object braces.

// Current solution doesn't account for key/value pairs, commas.

// var parsePrimitive = function (primitive) {
//   if (primitive === 'null') {
//     return null;
//   } else if (primitive === 'true') {
//     return true;
//   } else if (primitive === 'false') {
//     return false;
//   } else {
//     var number = parseInt(primitive);
//     var restrung = number + '';
//     if (restrung.length === primitive.length) {
//       return number;
//     } else {
//       return primitive;
//     }
//   }
// };

//solve a simple case
//json = '{"name":"John", "age":30, "city":"New York"}'
var parseJSON = function(json) {
//   // your code goes here
//   for (var i = 0; i < json.length; i++) {
//     if (json[i] === '{')
//   }
};
