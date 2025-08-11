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
function loginuser_1(username){
    if(username === undefined){// if(!username)
        console.log("Enter a username");
        return;
    }
    return `${username} just logged In`;
}
console.log(loginuser_1());
// if we pass any name than it will override JAY

// only give first value
function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200,300));
// ... is the rest operator which give all the value like below
function calculateCartPrice_1(...num1){
    return num1;
}
console.log(calculateCartPrice_1(200,300,400));

// First value go in val1 likewise second go in val2 and rest of go num1
function calculateCartPrice_2(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice_2(200,300,400,500,600));

const user={
    username: "JAY",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
// we can direct pass the object in a function
handleObject({
    username: "Smit",
    price: 399
});

const myArr=[1,2,3,4,5];
function returnSecondValue(Arr)
{
    return Arr[1];
}
console.log(returnSecondValue(myArr));