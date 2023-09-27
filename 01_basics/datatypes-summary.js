//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory - 2types
// 1. Stack - Primitive type data -> return copy 
// 2. Heap - Non-Primitive or Reference type data -> return reference

let myYouTubeName = "hiteshchoudhurydotcom"

let anotherName = myYouTubeName
anotherName = "chaiaurcode"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(userOne);

let userTwo = userOne
console.log(userTwo);

userTwo.email = "myemail@google.com"

console.log(userOne);
console.log(userTwo);

