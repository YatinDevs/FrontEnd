// Set(it is Iterable)
// Store Data
// Sets also have its Own Methods
// No index -Based Access
// Order is Not Guaranteed
// Unique Items only(NO duplicates allowed)


/*
const numbers=new Set([1,2,3,3]);
// Unique Items only(NO duplicates allowed) is ignored

console.log(numbers[2]);// No index -Based Access

console.log(numbers);

const numbers1=new Set();
// can store number  string as well as array
numbers1.add(1);
numbers1.add(2);
numbers1.add(3);
numbers1.add(4);
numbers1.add(5);
numbers1.add(6);
numbers1.add(['item1','item2']);
numbers1.add(['item1','item2']);
numbers1.add('item1');
numbers1.add('item2');
console.log(numbers1);

if(numbers1.has(2)){
    console.log("present");

}else
{
    console.log('Not present');
}

for(let number of numbers1){
    console.log(number);
}

const myArray1=[1,2,4,4,5,6,5,6,];

const uniqueElement=new Set(myArray1);
console.log(uniqueElement);
let length=0;
for(let numbelemnts of uniqueElement){
length++;
}
console.log(length);

console.log(uniqueElement.size);
*/