const nums=[1,2,3,4];

const total=nums.reduce(function(acc,curr){
    // console.log(`acc:${acc} and curr:${curr}`);
    return acc+curr;
},0);
console.log(total);

const total_1=nums.reduce((acc,curr)=>acc+curr,0);
console.log(total_1);

const shoppingCart=[
    {item:"iphone 16 cover",price:300},
    {item:"iphone 15 cover",price:200},
    {item:"iphone 14 cover",price:100},
    {item:"iphone 13 cover",price:250},
];
const grandTotal=shoppingCart.reduce((total,item)=>(total+item.price),0);
console.log(grandTotal);