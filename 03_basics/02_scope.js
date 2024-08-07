 
 //+++++++++++scope levels++++++++++
 // var is not have any scope .It can be accessed and manipulated from anywhere
 var c=300
 if(true){
    let a=10
    const b=20
    var c=200  //here outer a got changed to 200 from 300
    // console.log("INNER:",a)
 }

//  console.log(a); //will show error of out of scope
//  console.log(b);//out of scope error
//  console.log(c);  

function one(){
    const username="ayushi"
    function two(){
        const wwebsite="youtube"
        console.log(username);
    }
    // console.log(wwebsite); //give error
    two()
}
one()
 

//+++++++++++++++interesting+++++++++++++ mini hoisting concept
console.log(addOne(4))
function addOne(n1){
    return n1+1;
}
// addTwo(7) //wil show error as execution is written latter on 
const addTwo=function(n2){   //called expressions 
    return n2+2  
}
console.log(addTwo(7))     

