// //promise creation - 1
// const promiseOne=new Promise(function(resolve,reject){
//     //do an async task
//     //DB CALLS, Cryptography, network
//     setTimeout(function(){
//         console.log('Async task completed');
//         resolve()   //connect to .then
//     },1000)
// })

// //promise consumption

// promiseOne.then(function(){
//     console.log("Promise Consumed");

// } )

//promise creation - 2

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

//promise creation - 3

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"ayushi",email:"chai@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// //Promise Creation-4
// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"ayushi",password:"123"})
//         }else{
//             reject('Error Occurred')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//    console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })

//Promise Creation -5
// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//                 let error=true;
//                 if(!error){
//                     resolve({username:"javaScript",password:"123"})
//                 }else{
//                     reject('Error js went wrong')
//                 }
//             },1000)
// })

// async function consumePromiseFive(){
//   try {
//     const response= await promiseFive
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//     const response=await fetch('http://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//       console.log("E:",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error))
