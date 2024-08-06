// const tinderUser={} => creates non singleton object
//by using contructor => creates singleton object 
const instaUser=new Object();
// console.log(instaUser)
instaUser.id="123abc"
instaUser.name="Ayushi"
instaUser.isLoggedIn=false

// console.log(instaUser)

const regularUser={
    email: "some@gmail.com",
    fname: {
          userFullName:{
              firstName:"Ayushi",
              lastName:"Khhandal"
          }
    }
}

// console.log(regularUser.  fname.userFullName.firstName)


const obj1={1:"a",2: "b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}   ////{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3=Object.assign({},obj1,obj2) 
//you may or may not give {} as first parameter ,
// if you are not giving it then
// it will take first object as target and rest as source
const obj4={...obj1,...obj2}
// console.log(obj3)   
// console.log(obj4)

// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

// console.log(instaUser.hasOwnProperty('isLogged'))

const course={
    course: "javascript",
    price:"1",
    courseInstructor:"ayushi"
}



////Destructing Objects//////
// course.courseInstructor
const {courseInstructor: Instructor}=course   //const {value want to be extracted}=from where value is extracted
                         //renaming courseInstructor as Instructor
console.log(Instructor)

///JSON FORMAT///
/* 
  {
   "name":"ayushi",
   "email":"a@gmail.com"
  }

  [
    {},
    {},
    {}
  ]
*/