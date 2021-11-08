// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var body = document.body;
  var bodyClass = body.className;
  var bodyClassArray = bodyClass.split(' ');
  var results = [];
  for (var i = 0; i < bodyClassArray.length; i++) {
    if (bodyClassArray[i] === className) {
      results.push(body);
    }
  }
  var recurThruElements = function(node) {
    for (var i = 0; i < node.children.length; i++) {
      var childClassArray = node.children[i].className.split(' ');
      for (var j = 0; j < childClassArray.length; j++) {
        if (childClassArray[j] === className) {
          results.push(node.children[i]);
        }
      }
      recurThruElements(node.children[i]);
    }
  };
  recurThruElements(body);
  return results;
};
