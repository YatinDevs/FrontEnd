// Default parameters


/*
function addtwo(a,b){
    return a+b;
}

// const ans = addtwo(4,5);
// console.log(ans); //  9

const ans = addtwo(4);
console.log(ans); // NaN ---> 4+ undefined

*/

/*
// Before ES6 (how we handled undefined variables)
function addtwo(a,b){
    if(typeof b === "undefined"){
        b=0;
    }
    return a+b;
}

// const ans = addtwo(4);
// console.log(ans); // 4

*/

/*

//  ES6 (how we handled undefined variables)

// Default Parameters ---> In ES6
function addtwo(a,b=0){
    
    return a+b;
}
// const ans = addtwo(4);
// console.log(ans); // 4


const ans = addtwo(4,8);
console.log(ans); // 12

*/