// Immediately Invoked Function Expressions (IIFE) => to remove the global scope pollution problem

(function chai(){
     //named IIFE
    console.log(`DB CONNECTED`);
})(); //put ; to end the CODE 


((name)=>{
    //unnamed IIFE
    console.log(`DB CONNECTED 2 ${name}`);
})("ayushi");