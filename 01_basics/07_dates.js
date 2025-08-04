// DATE

let mydate=new Date();
console.log(mydate);
// Learn different methods and it's output
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());
// In JS Month will start at 0.
let myNewDate=new Date(2025,10,18,12,5);// it will give you what date you want
console.log(myNewDate.toLocaleDateString());
console.log(myNewDate.toLocaleTimeString());
console.log(myNewDate.toLocaleString());

let myCreatedDate=new Date("11-18-2004");// It will give you date in your formate
console.log(myCreatedDate.toLocaleString());

// Time Stamp->will give you ms from 1 jan 1970 to till you want
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// If we want time in seconds than simply divide by 1000 but it will give in decimal so use floor 
console.log(Math.floor(Date.now()/1000));

let date=new Date();
console.log(date);
console.log(date.getMonth()+1);
// getDay() give which day is starting from 1 as monday
console.log(date.getDay());
// See below format for better understand
console.log(date.toLocaleDateString('default',{weekday: 'long'}));