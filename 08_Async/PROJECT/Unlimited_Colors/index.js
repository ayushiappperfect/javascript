//generate random color

const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color="#"
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)]
    }
    return color
};

let intervalId
const startChangeBgColor=function(){
    if(!intervalId){
       intervalId=setInterval(changeBgColor,1000); 
    }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
const stopChangeBgColor=function(){
    clearInterval(intervalId);
    intervalId=null;
}

document.querySelector("#start").addEventListener('click',startChangeBgColor);
document.querySelector("#stop").addEventListener('click',stopChangeBgColor);



/*
Prevent Multiple Intervals: By checking if
 intervalId is already set, the function ensures that
  only one interval is running at a time. 
  Without this check, every click on the start 
  button would create a new interval, leading to 
  multiple intervals running simultaneously .
and causing the background color to change erratically.
*/