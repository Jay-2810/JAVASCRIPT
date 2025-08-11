const coding=['js','c++','c','sql'];

// forEach do not return any thing to see run below code
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);

// if we want some values on some condition than use filter
const nums=[1,2,3,4,5,6,7,8,9,10];
// filter will return the values on the given condition
// here filter return numbers which are >4
const nums_1=nums.filter((num)=>{
    return num>4;
});
console.log(nums_1);

const newNums=[];
// By using below syntex of forEach we can generate new array in given case, where num>4
nums.forEach((num)=>{
    if(num>4)
        newNums.push(num);
});
console.log(newNums);

const books=[
    {title: 'b1',genre:'Fiction',publish:1981,edition:2004},
    {title: 'b2',genre:'Non-Fiction',publish:1992,edition:2010},
    {title: 'b3',genre:'History',publish:1999,edition:2011},
    {title: 'b4',genre:'Non-Fiction',publish:2004,edition:2010},
    {title: 'b5',genre:'Science',publish:1987,edition:1999},
    {title: 'b6',genre:'Fiction',publish:1994,edition:2007},
    {title: 'b7',genre:'History',publish:2002,edition:2008},
    {title: 'b8',genre:'Science',publish:1964,edition:1986},
    {title: 'b9',genre:'Non-Fiction',publish:1979,edition:1997},
];

let userbooks=books.filter((bk)=>bk.genre==='History');
userbooks=books.filter((bk)=>{
    return bk.publish>1990 && bk.genre==='History'});
console.log(userbooks);