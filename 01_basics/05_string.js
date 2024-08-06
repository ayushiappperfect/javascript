const name="ayushi"
const repoCount= 20
 //interpolation 
//  console.log(`hello my name is ${name} and my repoCount is ${repoCount}`)
 
  
   const gameName= new String('ayushikh')
//    console.log(gameName[0])
//    console.log(gameName.__proto__) 

      /*
   Every single javascript object created, 
   automatically comes with a __proto__ property, 
   which is from the Object.prototype object.


   Basically __proto__ property and Object.setprototypeof() 
   sets or adds the property or functions to prototype
   */

//    console.log(gameName.charAt(2))
//    console.log(gameName.indexOf('h')) 

   const newString=gameName.substring(0,4)    // can't use negative values in this
   console.log(newString)

   const anotherString=gameName.slice(-7,4)     // can use negative values 
   console.log(anotherString)


   /*
   Trim()- stripped of whitespaces from both its beginning and end.
   whitespaces- white space and line terminators 
   */

   const newS="    ayushi   khandal "
   console.log(newS)
   console.log(newS.trim())


  const url="https://ayushi.com//ayushi%20khandal"
  console.log(url.replace('%20','-'))
  console.log(url.includes('beauty'))
  console.log(gameName.split('k'))
