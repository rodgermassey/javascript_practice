#!/bin/node

//var global = "I'm a global variable."

var o = {
	global:"I'm global for this object.",
	fun:()=> {
	console.log(this);
	},
	play:function play(){
		function insider(){
		console.log(this);
		}
		insider();
	}
}

o.fun();
o.play();
console.log(global);




/*const obj = {
  method: function (c) {
    console.log('method', this); // `this` === `obj`

    return c();
  }
};

obj.method(function() {
  console.log('c', this); // `this` === `window`
});
*/




