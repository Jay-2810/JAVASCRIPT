const nums=[1,2,3,4,5,6,7,8,9];

// map method return all the values where as filter return values on some condition like num>10
const newNums=nums.map((num)=>num+10);
// console.log(newNums)

// chaining
const nums_1=nums.map((num)=>num*10).map((num1)=>num1+1).filter((num)=>num>41);
console.log(nums_1);