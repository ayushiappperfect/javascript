/*
 prefer not to use var because of issue in block scope 
 and functional scope


 if value not specified then it shows uundefined.

 to show things in table format- console.table([attribute_name])
  

 The let keyword is an improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015. These variables has the block scope. 


 The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration. These variables also have the block scope. It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.
*/


const accountId= 144554
let accountEmail="ayushi@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState

console.table([accountId,accountEmail,accountCity,accountPassword,accountState])