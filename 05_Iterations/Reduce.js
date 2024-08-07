/*
The reduce() method in JavaScript is used to reduce
 an array to a single value. It executes a provided 
 callback function once for each element in the array, 
 resulting in a single output value. 
The callback function takes four arguments: 
accumulator, currentValue, currentIndex, 
and the array itself.
*/

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and currval: ${curval}`)
//     return acc+curval
// },0)

const myTotal=myNums.reduce((acc,curr)=> acc+curr,0)

console.log(myTotal);


const shoppingCart=[
    {
        itemName:"jsCourse",
        price: 2999
    },
    {
        itemName:"java",
        price: 899
    },
    {
        itemName:"py",
        price: 2099
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);