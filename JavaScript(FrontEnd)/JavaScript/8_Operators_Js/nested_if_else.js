

// let winningNumber=19;
// let userGuess = +prompt("Guess A Number?");
// // "12"
// console.log(typeof userGuess,userGuess);
// if(userGuess===winningNumber){
//     console.log("Winner");
// }else{
//     console.log("Loser");
//     if(userGuess>winningNumber){
//         console.log("Too high!!");
//     }else{
//         console.log("Too low!!");
//     }
// }


// prompt 
// takes input as string
// we converted it to number with +prompt 
// assigned it to user Guess
// nested if else used to check if it is winning number or not
// if yes  winner is printed
// if no loser is printed
// then it checks guess was lower or higher
// and prints high and loww acccordingly.


/*
What is the prompt () method?
Window: prompt() method - Web APIs | MDN
prompt() instructs the browser to display a 
dialog with an optional message prompting the user to input
some text, and to wait until the user either submits the
text or cancels the dialog. 

*/


let tempInDegree = 15;
if(tempInDegree < 0){
 console.log("extremely cold outside");
}
else if(tempInDegree < 16){
console.log("It is cold outside");
}else if(tempInDegree < 25){
console.log("wheather is okay ");
}else if(tempInDegree < 35){
console.log("Lets go for swim");
}else if(tempInDegree< 45){
console.log("turn on AC");
}else{
console.log("too hot!!");
}

