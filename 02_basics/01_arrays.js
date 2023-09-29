// array
// JavaScript arrays are resizable and can contain a mix of different data types

// shallow 
// deep

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // add element at the starting of the array
// myArr.shift()  // remove 1st element of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   //make a string of all the elements of the array

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A = ", myArr);

const myn1 = myArr.slice(1, 3)  // don't include the last index & don't modify main array

console.log("Sliced Array = ", myn1);
console.log("B = ", myArr);


const myn2 = myArr.splice(1, 3)  // includes the last index & modify the main array by removing that part from the main array
console.log("C = ", myArr);
console.log("Spliced Array = ", myn2);
