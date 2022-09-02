// console.log("Hello World!!!")

// let a = 1
// let b = 2
// let c = 3
// console.log(a)
// console.log(b)
// console.log(c)

// let a = 1
// let b = 2.435435
// console.log(typeof a) //In JS its a number; in other programming lang its integer
// console.log(typeof b) //let us refer b as float..but in JS they are all type number

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

// //
// //
// //
// //
// //18// repetition...TLDR
// //
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

// //
// //
// //
// //
//19// Stack trace and Call Stack...
// //
//helps us find error in out code using Chrome Dev Tools...

// //
// //
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
// //
// //
// //21// Scoping.. complex topic than Hoisting...
// //
// //see screenshots for details...

// //
// //
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
// let a = print(1) //so this just returns another function func(variable2)
// console.log(a) //this prints out the function 'func(variable2)'..
// a(111) //now just passing a(111); you basically saying
// //"func(111)"... which returns the log of "variable",
// //"variable2", and "c"... Where can this be important??
// //Well, when you need to pass many functions in one
// //function...

// //
// //
// //
// //
// //23// const.... in this below chapters we talk about advanced variables
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

// //
// //
// //
// //
// //24// 'var' this the third way to create variables...
// // //
//you should never use var... it was introduced at begining of JS
//'var' very wierdly... and doesnot follow scoping rules..
//so never use 'var'; since with latest JS you can use 'let' and 'const'

// //
// //
// //
// //
// //25// Type coercion. way of converting one type of information to another type
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
// console.log(typeof a.toString()) //this is actually a String; although looks like number

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

// //Equality to see how JS engine behaves...
// const a = null
// const b = undefined
// console.log(a == b) //returns true
// console.log(a === b) //returns false...they are technically not equal so false..
// console.log(a == null) //return true
// console.log(a === undefined) //returns false.. as expected
// console.log(a === null) //returns true

//Meaning using === sign disables Type Coercion... Interesting
// const a = 1
// const b = 2
// const bb = "1"
// console.log(a != b)
// console.log(a != bb) //returns false..because type coercion converts "1" to number
// console.log(a !== bb) //returns true..because now its
// //for more look into Screenshots...

// //
// //
// //
// //
// //27// "NaN" is a side effect of Type Coercion ... when dealing with numbers
// const a = "fsdfsfsd"
// console.log(parseInt(a)) //returns NaN --- not a number..
// console.log(typeof parseInt(a)) //type is number; but how can 'a' be number...

// //NaN is special and you need to specifically deal with it...
// const aa = "fsdfeefwrw"
// console.log(parseInt(aa)) //returns NaN; but is not equal to NaN --> aa == NaN...
// console.log(parseInt(aa) == NaN) //returns false... which is wrong!!
// console.log(parseInt(aa) === NaN) //still returns false... this is also wrong!!

// //this a peculiar way how JS is built!!!
// //NaN is not equal to anything; Wierd...
// //So now to check if something is not a number; we use a special buildin method...
// const aaa = parseInt("afdfs")
// const bbb = 1
// console.log(aaa) //returns NaN
// console.log(bbb)
// console.log(isNaN(aaa)) //special buildin function for using with JS NaN craziness..
// console.log(isNaN(bbb)) //correctly returns false...

// // //
// // //
// // //
// // //
// // //28// Arrays ... the most fun part variables in JS ... essentially you can list
// // //multiple variables... up until now we created variable with only one value; what
// // //if the variable took multiple values... we use Arrays...
// // const a = [1, 2, 3, 4]
// // console.log(a) //displays array a
// // console.log(a[0]) //display only the 1st element of array a
// // a.push(11) //this is how we add an element to list...
// // console.log(a) //now the array has another element added to the list..
// // a.push(["hi", "bye"])
// // console.log(a[5][1]) //accessing array within an array...
// // console.log(a.length)
// // //

// // //
// // //
// // //
// // //
// // //29//***Objects ... probably the most important variable type in JS
// // //because they allow you to do so much... Object is a collection of Information
// // //all related in some way...
// // let name = "Moo"
// // const age = 31
// // const favoriteNumber = 3

// // let person = {
// //    name: "Moooo",
// //    age: 31,
// // } //name is the property...acts as a key..."Moooo" acts as a value to the key...
// // console.log(person)
// // console.log(person.age)
// // console.log(console) // Interesting fact is even the console is an object and
// // //has tons of methods inside it...

// // //how do we add functions to an object; easy..just like any variable..
// // let person = {
// //    name: "Moooo",
// //    age: 31,
// //    sayHi: function () {
// //       //people normally use below way to write functions..
// //       console.log("Hi")
// //    },
// //    sayHi2() {
// //       //people usually use this pattern to write functions within array.
// //       console.log("HiHi2")
// //    },
// // }
// // // console.log(person.sayHi()) //returns "Hi" and undefined. therefore only use below
// // person.sayHi() //use this one instead...
// // //

// //Create an object called book with the following properties:
// //1. Title - string
// //2. Author - object with the properties (a)name, and (b)age
// let book = {
//    title: "Harry Potter",
//    author: {
//       name: "blabla",
//       age: 60,
//    },
// }
// console.log(book.title)
// console.log(book.author.name)
// //
// //

// //
// //
// //
// //
// //30//Pass-by-Value v/s Pass-by-Reference
// let a = 10
// let b = "Hi"
// let c = { name: "Moooo" } //lets say its memory address is 0x01
// let d = c //that means "d" is pointed to memory location of "c" and any changes
// //made in either 'c' or 'd' will effects both...

// console.log("a = " + a)
// console.log("b = " + b)
// console.log("c = " + JSON.stringify(c))
// console.log("d = " + JSON.stringify(d))
// console.log("****************************************")
// console.log("****************************************")

// d.name = "Joe" //just by changing this... will effect c as well.
// console.log("c = " + JSON.stringify(c))
// console.log("d = " + JSON.stringify(d))

// //this confuses a lot of developers...
// let a = [1, 2] //lets say memory location is 0x01
// let b = [1, 2] //lets say memory location is 0x02
// console.log(a === b) //both says false... they have different memory locations
// console.log(a == b) //both have different memory location...
// console.log("****************************************")

// a.push(3)
// console.log("a ---> " + a)
// console.log("b ---> " + b)
// console.log("****************************************")

// //how about we use const... no error because we donot change to value;
// //but only change the memory address...
// //this confuses a lot of developers...
// const a = [1, 2] //lets say memory location is 0x01
// const b = [1, 2] //lets say memory location is 0x02
// a.push(3)
// console.log("a ---> " + a)
// console.log("b ---> " + b)

// a = [1, 2, 3] //this is when you totally re-define a new
// //memory address for a; therefore now shows error...
// //because "const a" is constant and cannot be changed..
// console.log("****************************************")

// //when const shows error; and when not...
// const a = { name: "Moo" } //0x01
// // a = { name: "Moo", age: 31 } //0x02 //this cannot be used..
// console.log(a)
// console.log("****************************************")
// a.age = 31 //but this can be used to add to array... even if const..
// console.log(a)

// //all these wierd things that you see is because arrays and
// //Objects are referrences... all they are storing are references..
// //and this reference is where the data is stored...all they care
// //about is that they have a reference as their value... so this
// //reference is what you are comparing...

// //all because of passByReference...
// const a = [1, 2] //0x01
// const elementToAdd = 3 //stays 3;doesnot change //just have value 3

// add(a, elementToAdd)

// console.log(a)
// console.log(elementToAdd) //still shows 3

// function add(array, element) {
//    element = element + 1 //doesnot matter; 4 in this case calling "add"
//    array.push(element) //basically pushing element in stack.//references 0x01
// }
//
//

//
//
//
//
//31//Array methods... these are handy array methods that make your life much better

//
//

//
//
//
//
////
//
//

//
//
//
//
////
//
//
