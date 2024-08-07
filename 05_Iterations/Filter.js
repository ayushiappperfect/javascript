/* 
   The filter() method in JavaScript is used to create a new 
   array with all elements that pass a certain condition 
   defined by a callback function. It iterates through each
    element of the array and invokes the callback function 
    for each element. If the callback function returns true 
    for an element, that element 
   is included in the new array; otherwise, it is excluded.
*/

// const coding=["js","ruby","java","python","cpp"]
// //for each loop doesn't return anything  

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item // undefined
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=> num>4)
// console.log(newNums);

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
       newNums.push(num)
    }
})
console.log(newNums);
