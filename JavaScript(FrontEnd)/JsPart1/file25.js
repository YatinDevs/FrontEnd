// Filter Method

const numbers=[1,3,4,2,6,9,8,5];
/*
const isEven = function(number){
    return number%2===0;
}


const evenNumbers=numbers.filter(isEven);
console.log(evenNumbers);

const isOdd = function(number){
    return number%2!==0;
}

const oddNumbers=numbers.filter(isOdd);
console.log(oddNumbers);

*/

const evenNumbers=numbers.filter(function(number){
    return number%2===0;
});
console.log(evenNumbers);