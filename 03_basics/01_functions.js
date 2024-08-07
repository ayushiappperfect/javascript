function addTwoNo(n1,n2){
     return n1+n2
}

//if ypu don't pass values as arguments in function call then it take it as undefined
function loginUserMessage(username="ayu"){  //if you want to set parameter as default
    if(!username){
        console.log("Enter a valid username")
        return
    }
    return `${username} just logged in`
}

//  console.log(loginUserMessage()) //undefined
//  console.log(loginUserMessage("Ayushi"))


function calculateCartPrice(val1,val2,...num){  // here ... acts as a rest operator 
     return num 
}

// console.log(calculateCartPrice(200,300,400,5000))

const user={
    username: "ayushi",
    price:199
}

function handleObject(anyObject){
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject({
    username:"ayu",
    price:999
})   //direct passing of objects

handleObject(user)

const newArray=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200,300,4000]))