const marvel_heroes=['thor','IronMan','spiderman']
const dc_heroes=['superman','flash','batman']
// marvel_heroes.push(dc_heroes)  // make changes in same array or we can say add at last
const newMarvel=marvel_heroes.concat(dc_heroes) //concat method returns a new array
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])
// console.log(newMarvel)

const all_new_heros=[...marvel_heroes,...dc_heroes]
//console.log(all_new_heros)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array)
 
console.log(Array.isArray(dc_heroes)) //true
console.log(Array.from("khandal")) //['k','h','a','n','d','a','l']
console.log(Array.from({name:"khandal"})) //interesting becoz it doesn't able to create array from it i.e. whther it will make array from its indexed or keys so its giving an empty array


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) //[100,200,300]