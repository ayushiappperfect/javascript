/*
            Stack                |   Heap
        Primitive                |  Non-Primitive
        you will get copy in this| you will get a reference here of original value
                                 
*/

//stack memory-here changes will not get reflected in original value 

// let name="ayushi"

// let anotherName="khandal"
// console.log(anotherName);
// console.log(name);


//heap memory-changes got reflected in original value

let u1={
    namne:"ayu",
    pass:123
}

let u2=u1
u2.pass=345

console.log(u1.pass)
console.log(u2.pass)

