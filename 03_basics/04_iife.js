// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  

// function er last () is the execution call -> use for immediately execution of the function
// global scope er pollution e problem hoi onek bar, ai global scope er pollution problem solve korte IIFE/ () use kora hoi
//" ; "=> for ending the line, when 2 IIFE is executing in a file ";" is must otherwise code execute hobe nah

( (name) => {    
    // unnamed or simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


