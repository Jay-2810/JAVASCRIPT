const userEmail="jay@gmail.com";

if(userEmail){
    console.log("Got user email.");
}
else{
    console.log("Not Got user email.");
}

// falsy values=>false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy values=>"0",'false'," ",[],{},function(){}

let num=[];
if(num.length===0){
    console.log("Array is empty");
}

const obj={};
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1=5??10;
// if value is null than assign 10 for below example
// val1=null ?? 10;
// if value is undefined than assign 15 for below example
val1=undefined ?? 15;
console.log(val1);

// Ternary Operator => condition?true:false

const price=100;
price<=100?console.log("According to Budget"):console.log("Out of budget");