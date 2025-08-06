// const tinderuser=new Object();->this is singleton object
// this is non singleton object
const tinderuser={}

tinderuser.id="123abc";
tinderuser.name="Manjumaal";
tinderuser.logged= false;
// console.log(tinderuser);

const regularUser={
    email:"jay@gamil.com",
    fullname:{
        userfullname:{
            fname:"Jay",
            lname:'Patel'
        }
    }
}
console.log(regularUser.fullname.userfullname.fname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj4={
    5:"e",
    6:"f"
}
// obj3 will be object under 2 object 1 and 2
// const obj3={obj1,obj2};
// object.assign() return a new object which have all the other object's property
// first argument is the target object which will be modified 
// means if first argu. is obj1 than all other object's key and value store in obj1 and return obj1
// so, it's better to target is empty({}) object
// const obj3=Object.assign({},obj1,obj2,obj4);

// Best way to combine objects
const obj3={...obj1,...obj2,...obj4};
console.log(obj3);

// when values came from database than it is array of objects
const users=[
    {
        id: 1,
        email:"jay@gamil.com"
    },
    {
        id: 2,
        email:"dhruv@gmail.com"
    }
]
// how to access users 
users[1].email

console.log(tinderuser);
// All of the method return array so we can simply access it
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
// entries will return array of array of key and value
console.log(Object.entries(tinderuser));
// if we check that object have a property like this name if exist return true else false 
console.log(tinderuser.hasOwnProperty('logged'));