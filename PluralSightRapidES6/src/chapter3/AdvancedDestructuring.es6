'use strict';

var [high, low] = [,];
console.log(`high: ${high} low: ${low}`);

//RUNTIME ERROR - undefined does not have an iterator
// var [high, low] = undefined;
// console.log(`high: ${high} low: ${low}`);

//RUNTIME ERROR - null does not have an iterator
// var [high, low] = null;
// console.log(`high: ${high} low: ${low}`);

try {
    var [high, low] = undefined;
} catch (e) {
    console.log(e.name); //TypeError
}

var [high, low, ] = [500,200]; //valid. JS allows for trailing comma
console.log(`high: ${high} low: ${low}`);

let count = 0;
for(let [a,b] of [[5,10]]) {
    console.log(`${a} ${b}`);
    count++;
}
console.log(count);