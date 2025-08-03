// If datatypes are same for both than it's alright
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

// different datatype avoid to write something like that
console.log("2">1);
console.log("2"<1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);

// Also == equality and comparision (<,>,>=,<=) both works differently
// === triple equlity check works only when both's datatype are same
// It's return false if both type are different
console.log("1"===1);
console.log(1===1);