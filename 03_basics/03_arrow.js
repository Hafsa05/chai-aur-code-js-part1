const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2           // explicite return
// }

// const addTwo = (num1, num2) =>  num1 + num2   // implecite return - return likhar dorkar ny
 

// const addTwo = (num1, num2) => ( num1 + num2 )
// {} use krle return likha lage & () likhle return likha lagbe na

const addTwo = (num1, num2) => ({username: "hitesh"})   // object return korte {} use must


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// node environment er moddhe global object hocche empty object -> {}
// browser er moddhe global object hocche window object

// inside function this. use kora jaina 
