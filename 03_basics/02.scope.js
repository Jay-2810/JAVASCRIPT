let a=2;
const b=3;
var c=4;

console.log(a);
console.log(b);
console.log(c);

if(true)
{
    let d=2;
    const e=3;
    var f=4;
}
// var is not usable because if we define var in any scope than it will reflect out of that scope
// console.log(d);
// console.log(e);
console.log(f);

function one()
{
    const username="Jay";
    function two(){
        const website="Youtube";
        console.log(username);
    }
    // website is not print because it is out of it's scope
    // console.log(website);
    two();
}
one();

if(true)
{
    const username="jay";
    if(username==="jay")
    {
        const website="youtube";
        console.log(username+" "+website);
    }
    // ERROR
    // console.log(website);
}
// ERROR
// console.log(username);

// INTERESTING
// this is ok because addone a function
addone(4);
function addone(num){
    return num+1;
}
// this is not ok because addTwo is a variable
addTwo(4);
const addTwo=function(num){
    return num+2;
}