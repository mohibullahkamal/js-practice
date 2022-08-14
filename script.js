// console.log("Hello World!!!")

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

//
//
// //18// repetition...TLDR
//
// //convert this to arrow function..
// function printName(name) {
//    console.log(name)
// }
// //arrow function below
// let printNameArrow = (name) => console.log(name)
// printNameArrow("moooArrow")
// //but whats the benefit of writting arrow functions...
// //well it allows for little bit of less code..
// //for eg: below people usually use arrow function with normal
// //functions...
// function func(x, callback) {
//    console.log(x)
// }
// func(20, (variable) => console.log(variable))

//
//
//19// Stack trace and Call Stack...
//
//helps us find error in out code using Chrome Dev Tools...

// //
// //
// //20// Hoisting...
// //
// //functions are always hoisted to the top; unlike variable
// //where position of variables matter... if variable is down
// //in the code that Javascript will throw error because it reads
// // everything from top to bottom... only exception is "function"
// //also only old way of function... not the Arrow functions...
// //this is because arrow functions are technically variables.. not
// //functions; therefore only functions get Hoisted... not variables...

// //
// //
// //21// Scoping.. complex topic than Hoisting...
// //
// //see screenshots for details...

// //
// //
// //22// Closures.. very similar to Scoping..
// //
// let a = 1
// function print() {
//    console.log(a)
// }
// print()

// //Normally Interview qs... but rarely used in real life..
// //Usually above case of Closure rarely happens
// //Normally Closures are functions within a function..
// function print(variable) {
//    let c = 3
//    //just returns another function...
//    return function func(variable2) {
//       console.log(variable)
//       console.log(variable2)
//       console.log(c)
//    }
// }
// let a = print(1) //so this just returns another function func(variable2)..
// console.log(a) //this prints out the function 'func(variable2)'..
// a(111) //now just passing a(111); you basically saying
// //"func(111)"... which returns the log of "variable",
// //"variable2", and "c"... Where can this be important??
// //Well, when you need to pass many functions in one
// //function...

// //
// //
// //23// const.... in this below chapters we talk about advanced variables...
// //main reason to use const over 'let' is you cannot redefine
// //the value of the variable...
// // let a = 1
// // console.log(a)
// const b = 2
// b = 33 // show error cause 'const' variables cannot change...
// console.log(b)
// //'const' used when something is not changing...
// //its advisable to use const instead of let... that way you can
// //be alerted if something is changing...

//
//
//24// 'var' this the third way to create variables...
//
//you should never use var... it was introduced at begining of JS
//'var' very wierdly... and doesnot follow scoping rules..
//so never use 'var'; since with latest JS you can use 'let' and 'const'

// //
// //
// //25// Type coercion... way of converting one type of information to another type
// //we have various types--> number, string, boolean, null, undefined...
// let a = "1"
// // console.log(a)
// // console.log(typeof a)
// console.log(parseInt(a))
// console.log(typeof parseInt(a))

// let a = "1.3"
// console.log(parseInt(a)) //only '1' is taken from '1.3'..
// console.log(parseFloat(a)) //now using float gives desired results..
// console.log(typeof parseFloat(a)) //we are explicitly saying to computer
// //that we want a number...

// let a = 1.34 //this is a number; lets convert it to String..
// // console.log(a.toString())
// console.log(typeof a.toString()) //this is actually a String; although looks like number...

// //What is implicit type coercion??
// //it means that the computer is taking care to coercion...
// let a = 1
// // const b = "Hello" //now its assuming it to be String!!
// const b = "1"
// console.log(b + a)
// console.log(b == a) //this is IMPLICIT type coercion; JS always does it...
// console.log(a.toString())
// console.log(typeof a.toString())

// let a = 1
// const b = "3"
// //const b = "Hello" //gives error because cannot minus with string...
// console.log(b - a) //so when Minus its assuming "3" String as number!!
// //to fix the above issues with JS parsing... we explicitly parse it beforehand...
// console.log(parseInt(b) + a) //we explicitly parse it...

// //
// //
// //26//How to check for Equality ... since Type Coercion is confusing
// // const a = 1
// // const b = "1"
// //What happens when we check for equality between 0 and false??
// const a = 0 //JS engine converts 0 to falsy...hence this outcome...
// const b = false //when you check for equality; JS says 0 and false
// //are equal...
// console.log(a == b) //check for equality...JS is doing Type Coercion
// //and making a and b as number to see if they are equal...

// //now lets see with "" empty string...
// const d = "" //any empty string is converted to falsy by JS engine...
// const e = false
// console.log(d == e) //returns true...

// // //***RECOMMENDED*** use "===" instead of "==" sign...
// //IF you want to be serious and tell JS Do not convert the type;
// //use === sign... solves above issues and confusion with JS type coercion..
// const d = ""
// const e = false
// console.log(d === e) //returns false...

//
//
////
//

//
//
////
//

//
//
////
//

//
//
////
//
