// +++++++++NUMBERS++++++++++

const score=400
// console.log(score)  //400

const balance=new Number(200)
// console.log(balance) //[Number: 200]
// console.log(balance.toString().length)  //3
// console.log(balance.toFixed(2)) //200.00

const otherNumber=123.8923
// console.log(otherNumber.toPrecision(4)) //123.9
const hundreds= 1000000
// console.log(hundreds.toLocaleString()) //1,000,000
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000 (according to India)

// +++++++++MATHS+++++++++++
// console.log(Math)
// console.log(Math.abs(-4)) //4 // abs conerts negative to positive and not positive to negative 
// console.log(Math.round(4.6)) //5
// console.log(Math.ceil(4.2))  //5
// console.log(Math.floor(4.9))  //4
// console.log(Math.min(4,3,6,7)) //3
// console.log(Math.max(4,7,3,6)) //7


console.log(Math.random())  // it generates value between 0 and 1
console.log((Math.random()*10)+1) //sometimes it give problem when we have value as 0.1 so use Math.floor() and add 1 as it is minimum value
console.log(Math.floor(Math.random()*10)+1)

const max=10
const min=20

console.log(Math.floor(Math.random()*(max-min+1))+min) 