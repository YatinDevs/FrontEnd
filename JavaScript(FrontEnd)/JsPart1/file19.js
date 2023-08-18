// Rest Parameters

function myFunction(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);

}
myFunction(4,4,6,67,3434,35235,253,5);

const addAll=(...numbers)=>{// rest parameters
     
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    console.log(total);
}

addAll(1,2,3,4,5); // assigning rest parameters