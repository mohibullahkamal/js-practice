//console.log("Hello World!!!")

// let a = 1
// let b = 2
// let c = 3
// console.log(a)
// console.log(b)
// console.log(c)

// let a = 1
// let b = 2.435435
// console.log(typeof a) //In JS its a number; in other programming lang its integer...
// console.log(typeof b) //let us refer b as float... but in JS they are all type number...

// let a = false
// let b = true
// console.log(typeof a)
// console.log(typeof b)

// function sayHi() {
//    console.log("Hi...")
// }
// sayHi()
// sayHi()

// function sum(a, b) {
//    console.log(a + b)
// }
// sum(1, 2)

// //function that prints a persons name
// function printName(name) {
//    console.log(name)
// }
// printName("Mooo")

// //function returning sum
// function returnSum(a, b) {
//    return a + b
// }
// let sum = returnSum(1, 2)
// console.log("The sum is: " + sum)

// //Create a function with one argument (name) it will return
// // that name to end of string "Hello "
// function myName(name) {
//    return name
// }
// function sayHello(name) {
//    console.log("Hello " + name)
// }
// let n = myName("Mooo")
// sayHello(n)
// sayHello(myName("looo"))

// //Very, Very common in JS... Passing function as argument...
// function printVar(v) {
//    console.log(v)
// }
// function func(v) {
//    v("Hello RED World")
// }
// func(printVar)

// // very very important handling Callbacks...
// function sumCallback(a, b, callback) {
//    callback(a + b)
// }
// function handleSum(sum) {
//    console.log(sum)
// }
// sumCallback(2, 2, handleSum)

// //Another example of handling callback...
// function printVariable(n) {
//    console.log(n)
// }
// function handlePrint(name, callback) {
//    callback("Hello " + name)
// }
// handlePrint("Mooo", printVariable)

// //Anonymous function... short form of above callback function...
// function printName(name, callback) {
//    callback("Hello " + name)
// }
// printName("Mooo", function (v) {
//    console.log(v)
// })

//****no need of this one.. when using anonymous functions***
// function printName(n) {
//    console.log(n)
// }
//*********************
function handlePrintName(n, callback) {
   callback("Hello " + n)
}
handlePrintName("MOOO", function (v) {
   console.log(v)
})
