// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className
// ) {
//   var body = document.body;
//   var bodyClass = body.className;
//   var bodyClassArray = body.classList;
//   var results = [];
//   for (var i = 0; i < bodyClassArray.length; i++) {
//     if (bodyClassArray[i] === className) {
//       results.push(body);
//     }
//   }
//   var recurThruElements = function(node) {
//     for (var i = 0; i < node.children.length; i++) {
//       var childClassArray = node.children[i].classList;
//       for (var j = 0; j < childClassArray.length; j++) {
//         if (childClassArray[j] === className) {
//           results.push(node.children[i]);
//         }
//       }
//       recurThruElements(node.children[i]);
//     }
//   };
//   recurThruElements(body);
//   return results;
// };

//attempted (and completed) implementation w/o side effects
//check if current node has the classname. If so, push it to results.
//recur through children, concatting results upon return.
var getElementsByClassName = function(className, node) {
  node = node || document.body;
  var nodeClassArray = node.classList;
  var results = [];
  for (var i = 0; i < nodeClassArray.length; i++) {
    if (nodeClassArray[i] === className) {
      results.push(node);
    }
  }
  for (var i = 0; i < node.children.length; i++) {
    results = results.concat(getElementsByClassName(className, node.children[i]));
  }
  return results;
};
