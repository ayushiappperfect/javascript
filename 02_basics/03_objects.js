//singleton - only one instance of object created
//when we create objects using constructor then singelton is made
//else if we create by literals then singleton not presented
//can create objects by 2 methods-
//1.object create
//2.object literals
  


/////object literals////////
const mySym=Symbol("key1")
const Juser={
    name:"ayushi",
    age:20,
    [mySym]:"mykey2",  //for symbols use [] as this is the right syntax
    "location":"Jaipur"
}

// console.log(Juser.age)  //20
// console.log(Juser["age"]) //20

// console.log(Juser.location) //Jaipur
// console.log(Juser["Location"]) //undefined

// console.log(Juser[mySym]) //as we are using symbol so used []

Juser.location="Udaipur"
//Object.freeze(Juser) 
// console.log(Juser)
// Juser.location="Jodhpur"
// console.log(Juser)  // as you have freezed the object so it will not change location into Jodhpur

Juser.greeting=function(){
    console.log("Hello JS user")
}
Juser.greetingTwo=function(){
    console.log(`Hello JS user, ${Juser.name} `)
}
console.log(Juser.greeting())
console.log(Juser.greetingTwo())
console.log(Juser.greeting) //[Function(anonymus)] => meaning is that function is not executed ,only function reference is returned back