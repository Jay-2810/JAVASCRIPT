// ARRAYS

const nums=[1,2,3,4,5];
const myArr=[18,11,"birthday","Jay"];
const newArr=new Array(1,2,3,4);

console.log(myArr[2]);

// Methods
// push add at back and pop delete from back
nums.push(6);
nums.push(7);
nums.pop();
// unshift push at front and shift delete from front
nums.unshift(0);
nums.unshift(-1);
nums.shift(-1);
console.log(nums);

console.log(nums.includes(0)); // Return true or false based on giving element present in array or not
console.log(nums.indexOf(3));

// join convert array into string
const nums2=nums.join();
console.log(nums2);
console.log(typeof(nums2));

// slice and splice
// In slice, it return copy of the portion of array from start ind to end-1 ind
// In splice, it return portion of array from start ind to end+1 ind and remove that portion from the original array
// Also, we can use splice for insert the elements
const slicenNum=nums.slice(2,5);
console.log("Original ",nums);
console.log("Slice ",slicenNum);

const spliceNum=nums.splice(2,3);
console.log("Original ",nums);
console.log("Splice ",spliceNum);
console.log("Original ",nums);
// Insert at ind 2...second argument 0 means it insert the element
nums.splice(2,0,2,3,4);
console.log(nums);

// Replace elements...second argument 1 means it replace the element
nums.splice(1,1,-1);
console.log(nums);
nums[1]=1;
console.log(nums);
console.log(nums.length);