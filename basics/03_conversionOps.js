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