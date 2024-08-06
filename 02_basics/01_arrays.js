const myarr=[1,4,6,8]
/*
JavaScript arrays are resizable and can conatin a mix of different data types
JavaScript arrays are not associative arrays and are zero-indexed arrays
JavaScript arrays copy operations create shallow copies.
    Here shallow copies means that copies share the same references (like heap)
    and deep copies means that copies don't share the same references (like stack)

*/

// const heros=['spiderman','IronMan']
// console.log(heros[1])
// myarr.push(10)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)

myarr.unshift(9) //Inserts new elements at the start of an array, and returns the new length of the array.
myarr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myarr)
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(3))

const newarr=myarr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(typeof myarr)
// console.log(typeof newarr)

//slice, splice
// splice manipulates the array whereas slice don't do that
console.log("A ", myarr)
const myn1=myarr.slice(1,3)
console.log("myn1",myn1);
console.log("B ", myarr)
const myn2=myarr.splice(1,3)
console.log("C",myarr)
console.log("myn2",myn2)