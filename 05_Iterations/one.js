// for loop
/*
for(let i=0;i<10;i++){
    const ele=i
    console.log(ele);
}*/

//break and continue


//while loop
/* let index=0
while(index<=10){
     console.log(`value of index id ${index}`);
     index+=2
}*/


//do while loop
// let score=11;
// do{
//     console.log(`score is ${score}`);
//     score++;
// }while(score<=10)

//for of

// ["","",""]
// [{},{},{}]
// const arr=[1,2,3,4,5]
// for(const iterator of arr){
//     console.log(iterator);
// }
// const greetings="hello world"
// for(const greet of greetings){
//     console.log(` ${greet}`);
// }

//Maps => collection of Key-value Pairs and has unique keys 

//Maps are not iteratable
// const map=new Map()
// map.set('IN','India')
// map.set('FR','France')
// map.set('IN','India') //will not insert this as map already has this
// console.log(map);

// for(const key of map){  //it will give as one pair at a time
//     console.log(key);
// }

// for(const [key,value] of map){   //it will destructure your map
//     console.log(key,':-',value);
// }


//for in (objects)

// let myObj={
//     js:'JavaScript',
//     rb:'ruby',
//     cpp:'c++'
// }

// for(const key in myObj){
//     console.log(`${key} is a shortcut for ${myObj[key]}`);
// }

// const programming=["js","rb","py","java"]

// for(const key in programming){
//     console.log(programming[key]);
// }



//for each loop
//array.forEach(function(element){})
//array.forEach(element => { });
// const coding=["js","rb","py","java"]
// coding.forEach(function(val){
//    console.log(val);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// // coding.forEach(printMe());   =>it will give error , only pass refernce not execute them
// coding.forEach(printMe);


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
