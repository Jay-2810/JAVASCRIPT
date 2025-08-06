"use strict"; // Treat all js code as newer version
// alert(3+3) // Not working beacuse we use node not browser

let name="Jay"
let age=18
let isTrue=false
let add=null
let city
// number=> 2^53
// bigint
// string=""
// null=> standalone value
// undefined=> undefined don't have any type
// symbol=> unique
// object=> null is a object

// console.table(typeof[name,age,isTrue,add,city]); =>don't work
console.table([name,age,isTrue])
console.log(typeof add) // null is object
console.log(typeof city)
// also we can check type using below format
console.log(typeof "JAY")