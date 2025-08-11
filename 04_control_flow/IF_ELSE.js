// if we want to run the code and see the output than simply uncomment code and run
const temp=41;
if(temp<50){
    console.log("temp<50")
}
else{
    console.log("temp >=50");
}

// let score=101;
// if(score>100)
// {
//     let power="fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance=1000;
// if(balance>500) console.log("Balance is above 500");

// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1500")
// }

const userLoggedIn=true;
const debitcard=true;
const userLoggedInfromGoogle=false;
const userLoggedInfromEmail=true;
if(userLoggedIn && debitcard){
    console.log("Allow to buy.");
}

if(userLoggedInfromEmail || userLoggedInfromGoogle){
    console.log("User logged IN.")
}