#!/bin/node

function codeHoist(){
  let b;  // will give an error cannot use b before declaration
    a = 10;
    console.log(a,b);
}
codeHoist();
 
console.log(a); // 10
//console.log(b); // ReferenceError : b is not defined

/*x = y = "global";
(function() {
    x; // undefined
    y; // Reference error: y is not defined

    var x = "local";
    let y = "local";
}());
*/
