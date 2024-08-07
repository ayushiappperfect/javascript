/* 
The map() method in JavaScript is used to 
create a new array by applying a function to each 
element of the original array. It iterates through 
each element of the array and invokes a callback
 function for each element.
The result of the callback function is then added 
to the new array.
*/
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map((num)=>num+10)
// console.log(newNums);

const newNums=myNums
                   .map((num)=> num*10)
                   .map((num)=>num+1)
                   .filter((num)=>num>=40)
console.log(newNums)