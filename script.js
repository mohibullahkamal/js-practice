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

// //
// //
// //
// //**************IMPORTANT**************** */
// //*************************************** */
// //*************************************** */
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

// //****no need of this one.. when using anonymous functions***
// // function printName(n) {
// //    console.log(n)
// // }
// //*********************
// function handlePrintName(n, callback) {
//    callback("Hello " + n)
// }
// handlePrintName("MOOO", function (v) {
//    console.log(v)
// })

// //Arrow functions...
// //this function will be converted to arrow function...
// function sum(a, b) {
//    return a + b
// }
// let sumArrow = (a, b) => {
//    return a + b
// }
// console.log(sumArrow(1, 2))

// //change below function to arrow function...
// function printName(name) {
//    console.log(name)
// }
// //change this...
// let printNameArrow = (name) => {
//    console.log(name)
// }
// printNameArrow("MOOO")

// //nice shortcut arrow function
// //change this below to arrow shortcut function...
// function printHi(name) {
//    return "Hi " + name
// }
// //from bigger arrow function...
// let printHiArrowVerbose = (name) => {
//    return "Hi Verbose " + name
// }
// console.log(printHiArrowVerbose("VerboMoo"))
// //changed to arrow function...
// let printHiArrow = (name) => "Hi " + name
// console.log(printHiArrow("MUUU"))

// //***********IMPORTANT**************** */
// //************************************ */
// //But why why why are we using ARROW functions
// //well its kinda less code when we write
// //it in an Anonymous Arrow function...
// function func(x, callback) {
//    callback(x)
// }
// // //Instead of this...took 3 lines..do it in 1 line..
// // func("Mooo", function (name) {
// //    console.log("Hi " + name)
// // })
// //Write this arrow function instead..In one single line...smart
// func("MoooArrow", (name) => console.log("Hi " + name))
// //this has "Hi " while calling func... below has before...
// //************************************ */
// //************************************ */
// //Another practice example; similar to above...
// function funcHi(x, callback) {
//    callback("Hi " + x)
// }
// funcHi("MooFuncHi", (variable) => console.log(variable))
// //"Hi " is mentioned before; in funcHi()...
// //************************************* */
// //************************************* */

// //Let and const variables
// //const variables does not allow any changes to variables;
// //where as let variables allow for changes later on...
// const a = 10
// // a = 100 //will show an error because a is const variable...
// let b = 20
// b = 200
// console.log(a + b)
