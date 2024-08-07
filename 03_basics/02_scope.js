 // var is not have any scope .It can be accessed and manipulated from anywhere
 var c=300
 if(true){
    let a=10
    const b=20
    var c=200  //here outer a got changed to 200 from 300
    console.log("INNER:",a)
 }

//  console.log(a)  //will show error of out of scope
//  console.log(b) //out of scope error
 console.log(c)  