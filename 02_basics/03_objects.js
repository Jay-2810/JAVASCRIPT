// singleton objects
// object.creat()

// object literals
const mysym=Symbol("key1")
// If we want to use mysym(symbol) in object than see below format
const user={
    name: "JAY",
    "full name": "Patel Jaykumar Kishorbhai",
    [mysym]: "yess",
    age: 20,
    email: "jay1811@gmail.com",
    isLoggedIn: false,
    last_loggedIn: [1,2,3]
}
// we can access object's key by using '.' or [] like user.name or user["name"]
// In [] this format we want to use " " neccessary
// if object's key is written by "full name" and symbol than we can only use [] this format to access

// console.log(user);
console.log(user.name);
console.log(user["full name"]);
console.log(user[mysym]);
console.log(user.last_loggedIn);
console.log(typeof mysym);

user.email="jay1811@yahoo.com";
// freeze ignored all changes on that object(here user) and stay as it
// Object.freeze(user);
user.email="jay1811@ms.com";
console.log(user);

// If we want to use function with object than first release the freeze method
user.greetings=function(){
    console.log("Hello user!!!");
}
user.greetings_1=function(){
    console.log(`Hello JAVASCRIPT user ${this.name}.`);
}
console.log(user.greetings());
console.log(user.greetings_1());