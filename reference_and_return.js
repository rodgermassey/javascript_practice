#!/bin/node


var a = function(){     // this line returns the reference to the funciton.
	var c=0;
	c++;
	console.log(c);
}

a(); //outuput will be 1
a(); // output will still be 1 as c is local variable.
//console.log(c);//if c is global then outpur will be 2.

console.log("1st. next using reference after declaring function");

var a = outer;	// storing the reference of the outer funciton

function outer()
{
	var c=1
	c++;
	console.log(c);
}

a();
a();

console.log("2nd. next using return to return the reference of the inner function");

var a= func(); //storing the reference of the function returned from func function

function func()
{
	return function () // this returns the reference of this function and
			   // doesn't execute the function.
	{
		console.log("i'm returning a funciton from within a function");
	}
}

a();
a();

console.log("3rd. variation of the return which returns the function")

var a = fun();
function fun()
{	
	function f()
	{
		console.log("wassup peeps-->");
	}
	return f;// this will return the reference to the function f as well and will work just fine like the above example function "func"
}

a()
a()

console.log("4th. returning a function calling and not function reference using the 'return' keyword  and understanding it")

var a = fu();
function fu()
{	
	function f()
	{
		console.log("wassup boys-->");
		
		//return 100;using we can return a value(100) to store in variable a
		// without above line we are returing undefined.
	}
	return f();// this return will not work as intended it return the function calling and not the reference.
}

console.log(a)//a cannot be called directly as it doesent has the function reference
console.log(a)//same goes for this "undefined" is displayed as the function 'fun' calls function 'f' while returning it and this function 'f' returns 'undefined which is then stored in the variable a
