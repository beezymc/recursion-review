// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var handlePrimitive = function(primitive) {
  if (!isNaN(primitive)) {
    return primitive + '';
  } else if (primitive === null) {
    return 'null';
  } else if (typeof primitive === 'boolean') {
    return primitive + '';
  } else if (typeof primitive === 'string') {
    return '\"' + primitive + '\"';
  } else {
    return '';
  }
};

var stringifyJSON = function(obj) {
  var stringified = '';
  if (typeof obj !== 'object' || obj === null) {
    stringified += handlePrimitive(obj);
  } else if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      stringified += stringifyJSON(obj[i]) + ',';
    }
    stringified = '[' + stringified.slice(0, stringified.length - 1) + ']';
  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    stringified = '{' + stringified.slice(0, stringified.length - 1) + '}';
  }

  return stringified;
};
