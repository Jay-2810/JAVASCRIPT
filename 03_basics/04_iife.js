// Immediately Invoked Function Expressions (IIFE)

// It'a a named IIFE
(function one(){
    console.log(`Good Morning`);
})();

// It's not a named IIFE
((name)=>{
    console.log(`Good Noon ${name}`);
})("jay");