const user={
    username: "ayushi",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`); //this refers to current context
    }
}

// user.welcomeMessage()
// user.username="ayu"
// user.welcomeMessage()
// console.log(this)  //gives {} in node environment and if we do it in browser then it give {Window : } like this 


//  function chai(){
//     let username="ayu"
//     // console.log(this);  //if you apply this in function then it give multiple values 
//     console.log(this.username); //this will o/p as undefined as we can't use like this in function
// }
// chai()


// const chai=()=>{
//     let username="ayu"
//     // console.log(this.username) //undefined
//     console.log(this); //{}
//     // console.log(username);
// }
// chai()

// const addTwo=(n1,n2)=>{
//      return n1+n2
// }


// const addTwo=(n1,n2)=> n1+n2
// const addTwo=(n1,n2)=> (n1+n2) //good 
const addTwo=(n1,n2)=> ({username:"ayushi"}) // to pass/return objects from function

console.log(addTwo(3,4))  //7


// const myArray=[2,3,4,5,6]
// myArray.forEach()