// Function Expressions
// Converting Functions into Function Expressions



const printInvalidPassword= function (){
    console.log("Invalid Password!!");
}

printInvalidPassword();
printInvalidPassword();

const addition=function (){
    return 2+4;
}
const result=addition();
console.log(result);

const sum=function (num1,num2){
    return num1+num2;
}

const result1=sum(10,5);
console.log(result1);



// odd or even

const isEven=function (n){
    if(n%2==0){
        return true;
    }
    return false;
}

console.log(isEven(1));


// function 
// input:string output :first Char

const firstChar=function (str){
   return str.charAt(0);// or str[0];
}

console.log(firstChar("Yatin"));


// function 
// input: array,target(number)
// output : index of target if present in array

const linearSearch= function (array,target){
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