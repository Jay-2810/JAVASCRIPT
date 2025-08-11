const coding=['js','c++','c','sql'];

// function in for each loop
coding.forEach(function (item){
    // console.log(item);
})

// arrow function in for each loop
coding.forEach((item)=>{
    // console.log(item);
})

// By using call by reference 
function print(item){
    // console.log(item);
}
coding.forEach(print);

// it will give value, it's index and entire arr
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const my_coding=[
    {
        language: "c++",
        extension: ".cpp"
    },
    {
        language: "javascript",
        extension: ".js"
    },
    {
        language: "python",
        extension: ".py"
    }
]
my_coding.forEach((item)=>{
    console.log(item.language,item.extension);
})