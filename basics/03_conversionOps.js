let score=true;
console.log(typeof (score));
let numberScore=Number(score);
console.log(typeof (numberScore));
console.log(numberScore);
// If we convert any datatype to number than it's type is number but value is different shown below
// "33"=> 33
// ""=> 0
// "33abc"=> NaN
// undefined=> NaN
// true=> 1 false=> 0

let loggedIn;
let booleanloggedIn=Boolean(loggedIn);
console.log(typeof(booleanloggedIn));
console.log(booleanloggedIn);
// If we convert any datatype to boolean than it's type is boolean but value is different shown below
// "Jay"=> true
// ""=>false
// undefined=> false
// 0=>false 1=>true (0,1=>numbers)

let somenumber=1000
let stringsomenumber=String(somenumber);
console.log(typeof(stringsomenumber));
console.log(stringsomenumber);

//******OPERATIONS******//
let value=18;
let negvalue=-value;
// console.log(negvalue);

// console.log(value+11);
// console.log(18+11);
// console.log(18/11);
// console.log(18%11);
// console.log(18-11);
// ** use for power
console.log(2**3);

// conversion
// if in converion their is any string present than it convert to string
// but if before string their is 2 numbers which can be add than first they add and than convert to string.
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true);
// below two console turn into the number because of '+'
console.log(+true);
console.log(+false);

// Last ae have postfix and prefix ops.
let age=18;
console.log(age++);
console.log(++age);