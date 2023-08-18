// Arrow Functions 
// ()=>{code}       instead of   function(){code}

const printInvalidPassword=()=>{
    console.log("Invalid Password!!");
}

printInvalidPassword();
printInvalidPassword();

const addition= ()=>{
    return 2+4;
}
const result=addition();
console.log(result);


// Arraw with only 1 parameter
const sum= (num1,num2)=> num1+num2;


const result1=sum(10,5);
console.log(result1);



// odd or even
// check this arrow function out 
// we skipped ()=>
// we Skipped return true and false line of code
// short and simple for one parameter input
const isEven= n=>  n%2===0;
        

console.log(isEven(2));


// function 
// input:string output :first Char
// if only one parameter input we can remove ()=>
const firstChar= str=>str.charAt(0);// or str[0];


console.log(firstChar("Yatin"));


// function 
// input: array,target(number)
// output : index of target if present in array

const linearSearch=  (array,target)=>{
    for(let i=0;i<array.length;i++){

        if(array[i]===target){
            return i;
        }
    }

    return -1;

}

const myArray=[1,2,3,4,5,6,7];
const mytarget=9;
const result2=linearSearch(myArray,mytarget);
console.log(result2);