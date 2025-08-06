function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("y");
}
sayMyName();

function addTwoNumbers(number1,number2){
    res=number1+number2;
    console.log(res);
}
addTwoNumbers(18,11);
function addTwoNumbers_1(number1,number2){
    return number1+number2;
}
// we can also save this in a variable
const result=addTwoNumbers_1(18,11);
console.log(result);

function loginuser(username){
    return `${username} just logged In`;
}

console.log(loginuser("Jay"));
// If we don't pass any value than it is undefined..run the code and see output
console.log(loginuser());

// IF statement
function loginuser_1(username="Jay"){
    if(username === undefined){// if(!username)
        console.log("Enter a username");
        return;
    }
    return `${username} just logged In`;
}
console.log(loginuser());
// if we pass any name than it will override JAY