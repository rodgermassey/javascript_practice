#!/bin/node

console.log("hello")
var array = [1,2,3,4,5,6];
console.log(array.toString());

const  ar = [1,2,3,4,5]
console.log(ar.toString());
ar.length=0
ar.push.apply(ar,array)

console.log(ar.toSring())

let a = [1,2,3,4,5]
console.log(a.toString());
