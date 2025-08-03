// SUMMARY //

// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score=100;
const valscore=100.5;
let isloggedIn=true;
let outsidetemp=null;
let userMail;
const id=Symbol('123');
const nextid=Symbol('123');
console.log(id===nextid);
const bigNumber=15165169498456n;//bigint
console.log(typeof (bigNumber));


// Reference (Non Primitive)
// Array, Objects, Functions

const array=["Jay","Smit","Maa","Papa"];

let myObj={
    name: "Jay",
    age: 18,
    height: 175
}
const i=0;
const myFunction=function(){
    console.log("JAY");
}

console.log(typeof (myObj));
console.log(typeof (myFunction));

//******Memory******//
// Stack(primitive) Heap(non-primitive)

let name1="Jay";
let name2=name1;
console.log(name1,name2);
name2="Patel"
console.log(name1,name2);

let userone={
    mail: "userone@gmail.com",
    name: "user1"
}

let usertwo=userone;
usertwo.mail="usertwo@gmail.com";
console.log(userone.mail);
console.log(usertwo.mail);