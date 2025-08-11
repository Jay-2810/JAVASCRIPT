const myObj={
    js: "javascript",
    cpp: "C++",
    swift: "swift by apple"
}
// Here we use for in loop
for (const key in myObj) {
    // Only return key of the object
    // console.log(key);
    //return value of that key
    console.log(`${key}=>${myObj[key]}`);
}

const programming=['c','c++','js','react'];
for (const key in programming) {
    console.log(programming[key]);
}

// main difference of for in and for of loop
// When we use forin loop than key will return key of that object
// And when we use for of loop than key will return the value of that key
// that's why to access object we use forin loop instead for of loop
// By using for in loop we can access both array and object
// MAP is not iterate using for in loop