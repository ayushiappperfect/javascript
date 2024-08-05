/*
 prefer not to use var because of issue in block scope 
 and functional scope


 if value not specified then it shows uundefined.

 to show things in table format- console.table([attribute_name])

*/


const accountId= 144554
let accountEmail="ayushi@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState

console.table([accountId,accountEmail,accountCity,accountPassword,accountState])