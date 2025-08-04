// By defining string we can use their function directly like shown below
let fname="Jay";
let lname="Patel";
// This is the out dated format 
// console.log(fname+" "+lname);

// Now a days we can use `` this like 
console.log(`My first name is ${fname} and last name is ${lname}`);
console.log(fname.length);
const username=new String("manjumaal");

console.log(username[0]);
console.log(username.length);

console.log(username.toUpperCase());
console.log(username.charAt(4));
console.log(username.indexOf('t'));
console.log(username.indexOf('j'));
// if we give start and end index in substring than it will return substring from start to end-1
// if we give only 1 argument(index) than it will return substring from index to last 
const newstring=username.substring(0,3);
const anotherstring=username.substring(5);
console.log(newstring);
console.log(anotherstring);

const name="    jay    ";
// trim will discarded "  " from front and end from a string
const newname=name.trim();
console.log(name);
console.log(newname);

const url="https:/abc/jay_2810/%20github";
// replace function simply replace first argument to second argument in a string
console.log(url.replace('%20','-'));
console.log(url.includes("jay"));

// Split will break string into words using some char like space or somethig
const split1=url.split('/');
console.log(split1);

// Learn different function of string from mdn