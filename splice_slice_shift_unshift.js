#!/bin/node

var pets=["dog","cat","monkey","donkey","sparrow","tiger","lion","cheetah"]

for(var i=0; i<pets.length; i++)
{
	console.log(pets[i]+"\t");
}

console.log("\n1. after using shift operation\n")

pets.shift()

for(var i=0; i<pets.length; i++)
{
	console.log(pets[i]+"\t")
}

console.log("\n2. after using unshift operation\n")
pets.unshift("shark")
for(var i=0; i<pets.length; i++)
{
	console.log(pets[i]+"\t")
}

console.log("\n3. after using splice operation to add and delete item\n")
pets.splice(2,2,"thor","batman","superman")
for(var i=0; i<pets.length; i++)
{
	console.log(pets[i]+"\t")
}

console.log("\n4. after using splice operation operation to insert item\n")
pets.splice(3,0,"doga")
for(var i=0; i<pets.length; i++)
{
	console.log(pets[i]+"\t")
}

console.log("\n5. after using splice operation to delete items\n")
pets.splice(2,2)
for(var i=0; i<pets.length; i++)
{
	console.log(pets[i]+"\t")
}

console.log("\n6. after using slice operation to make a copy of array\n")
var superheros = pets.slice(2,4)
for(var i=0; i<pets.length; i++)
{
	console.log(pets[i]+"\t")
}
console.log("\n now printing superheros\n")
for(var i=0; i<superheros.length; i++)
{
	console.log(superheros[i]+"\t")
}










