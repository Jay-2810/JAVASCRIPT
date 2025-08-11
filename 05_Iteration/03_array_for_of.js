// for of loop

const arr=[1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const string="Hello Jay";
for(const i of string){
    // console.log(i);
}

// Maps
// In mpp, it store only unique pairs of key and value
const mpp=new Map();
mpp.set('IN',"India");
mpp.set('JP',"Japan");
mpp.set('Fr',"France");
// Bharat will replace India in mpp
mpp.set('IN',"Bharat");
console.log(mpp);

// Iterate on map
// if we want to print key than simply use it[0]
// if we want to print value than simply use it[1]
for (const it of mpp) {
    console.log(it[1]);
}

// Below syntex simple store key and value individuals
for (const [key,value] of mpp) {
    console.log(key,'=>',value);
}

const myObj={
    'game1': 'Mario',
    'game2': 'Contra'
}
// for of loop doesn't work for object
// for(const [key,value] of myObj){
//     console.log(key,'=>',value);
// }