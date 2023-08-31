
// intro to loop

// for(let i=0;i<=9;i++){
//     console.log(i);
// }

// // For loop example

// let total = 0; //1+2
// let num = 100;
// let i=0;
// for(i=0;i<=num;i++){

//  total= total + i;
//  i++;
// }
// console.log(total);


// break and continue keywords


for(let j=0;j<=9;j++){
    if(j==5){
        break; // breaks loop at 5th
    }
    console.log(j);
}


for(let j=0;j<=9;j++){
    if(j==5){
        continue; // takes back to loop skips 5th 
    }
    console.log(j);
}