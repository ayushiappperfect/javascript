//Dates
/*
let myDate=new Date()
console.log(myDate.toString()) // Tue Aug 06 2024 07:11:50 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())// Tue Aug 06 2024
console.log(myDate.toLocaleString())  // 8/6/2024, 7:11:50 AM
console.log(typeof myDate)  // object

let myCreatedDate=new Date(2024,0,23)  //IN THIS MONTH START FROM 0 
let myCreatedDate2=new Date(2024,0,23,5,3)
let myCreatedDate3=new Date("2024-01-14")
let myCreatedDate4=new Date("01-14-2024")
console.log(myCreatedDate.toDateString()) // Mon Jan 23 2024
console.log(myCreatedDate2.toLocaleString())  // 1/23/2024, 5:03:00 AM
console.log(myCreatedDate3.toLocaleString())
console.log(myCreatedDate4.toLocaleString())
*/


let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000)) //to convert into seconds

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// ${newDate.getDay()} and the time 


//to customize the dates 
newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate)


