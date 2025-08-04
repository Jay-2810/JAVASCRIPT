const score=18;
console.log(score);

// Explicitly node print that it's a number
const num=new Number(1811);
console.log(num);

const balance=new Number(1000);
// toFixed() will give how many decimal point we have to want
console.log(balance.toFixed(3));

const newNum=new Number(18.8911);
// toPrecision() it will give how many precision we have to want 
// if precision is lesser than actual number's precision it will give round off value
console.log(newNum.toPrecision(2));

const nextnum=1000000;
// It will give number in readable from like 1,00,000
// By default it give US standard
console.log(nextnum.toLocaleString());
console.log(nextnum.toLocaleString('en-In'));

// Maths

console.log(Math);
console.log(Math.abs(-4.5));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(-4.5,-10,10,7));
console.log(Math.max(-4.5,-10,10,7));

// Math.random() return value between [0,1)
const random=Math.random();
console.log(random);
// If we want value from [0,9) simply we multiply by 10
const newRandom=(Math.random())*10;
console.log(newRandom);
// If we want to exact integer value than we ues floor
console.log(Math.floor((Math.random())*10));
// If we want to exclude 0 than simply add 1 to it so new range is [1,10]
console.log(Math.floor((Math.random())*10)+1);

const min=15;
const max=18;
// Range is [15,18]
// Here (max-min+1) describe how many numbers we want and (+min) describe from which num we want
const date=Math.floor((Math.random())*(max-min+1))+min;
console.log(date);