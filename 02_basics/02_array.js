const Marvel=["Iron_man","Spiderman","Captain"];
const DC_universe=["Batman","Superman","Flash"];

// This is not a good practice because of it push entire array rum this code and see
// Marvel.push(DC_universe);
// console.log(Marvel);
// console.log(Marvel[3][1]);

// Concat return a new array which is combine of both array
const merge=Marvel.concat(DC_universe);
console.log(merge);

// This is highly recommanded method of combine two or more array
const mergeAll=[...DC_universe,...Marvel,...merge];
console.log(mergeAll);

const arr=[0,1,2,[3,4],5,6,[7,8,[9,10]]];
// flat will return the array in single array not like above 
const arr_use=arr.flat(Infinity);
console.log(arr_use);

console.log(Array.isArray("JAY")); // return true or false 
console.log(Array.from("JAY")); // return the array of it's character
// Not working return empty array we need to give on which {key or value} it will make array
console.log(Array.from({name: "JAY"})); 

let num1=0;
let num2=1;
let num3=2;

console.log(Array.of(num1,num2,num3));