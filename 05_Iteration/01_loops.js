// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    // console.log(`Table of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop ${i}`);
        // console.log(`${i}*${j} = ${i*j}`);
    }
}

let myArr=[0,1,2,3,4];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// break and continue
for (let index = 0; index <= 20; index++) {
    if(index==6)
        break;
    console.log(index);
}
for (let index = 0; index <= 20; index++) {
    if(index==6)
        continue;
    console.log(index);
}