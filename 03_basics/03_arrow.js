const user={
    username: "Jay",
    ID: "187",
    welcomeMessage: function(){
        console.log(`${this.username},welcome.`);
        console.log(this);
    }
}
user.welcomeMessage();
// This will change the username of user object
user.username="Smit";
user.welcomeMessage();
// {this} will give empty because their is no global object in node
// If we run below line in console browser than it will return window which is a global object of browser
console.log(this);

function chai(){
    let username="jay";
    // return undefined because this keyword is not asseccable in function
    console.log(this.username);
    // return many values which are globally declared
    // console.log(this);
}
chai();

const tea=()=>{
    let username="jay";
    // return undefined because this keyword is not asseccable in function
    console.log(this.username);
    // it will return empty 
    console.log(this);
}
tea();

// ARROW function
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3));
// Implicit return
const addTwo_1=(num1,num2)=> num1+num2;
console.log(addTwo_1(3,3));
const addTwo_2=(num1,num2)=> (num1+num2);
console.log(addTwo_2(4,3));