 /* 
   FALSY VALUES-
      FALSE,0,-0,BIGINT 0N,"",NULL,UNDEFINED,NaN
    TRUE VALUES-
      "0",'FALSE'," ",[],{},FUNCTION(){}
 
      same meaning- ' ',0,false
 */
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("empty object");
}

//NULLISH COALESCING OPERATOR   (??): null undefined
let val1
val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??20
console.log(val1);

//Terniary Operator
// condition? true: false
const iceTeaPrice=100
iceTeaPrice>=80? console.log("greater than 80"):console.log("less than 80")

