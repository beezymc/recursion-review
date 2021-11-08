// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var handlePrimitive = function(primitive) {
  if (Number.isInteger(primitive)) {
    return primitive + '';
  } else if (primitive === null) {
    return 'null';
  } else if (typeof primitive === 'boolean') {
    return primitive + '';
  } else if (typeof primitive === 'string') {
    return '\"' + primitive + '\"';
  }
};

var stringifyJSON = function(obj) {
  var returnStr = '';
  if (typeof obj !== 'object') {
    returnStr += handlePrimitive(obj);
  }

  var returnStr = 'TBD';
  // your code goes here
  // primitives: Numbers, booleans, strings, null...
  // objects and arrays
  // ^Recursion
};
