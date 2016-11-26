'use strict';

var salary = ['32000', '50000', '75000'];
var [low, average, high] = salary;
console.log(average);

var salary = ['32000', '50000'];
var [low, average, high] = salary;
console.log(high);

var salary = ['32000', '50000', '75000'];
var [low, , high] = salary; //placeHolder syntax? >:-]
console.log(high);

var [low, ...remaining] = salary; //placeHolder syntax? >:-] //head::tail
console.log(remaining);

var salary = ['32000', '50000'];
var [low, average, high = '88000'] = salary;
console.log(high);

var salary = ['32000', '50000', ['88000', '99000']];
var [low, average, [actualLow, actualHigh]] = salary;
console.log(actualLow);

var salary = ['32000', '50000'];
var low, average, high;
[low, average, high = '88000'] = salary;
console.log(high);

function reviewSalary([low,average], high = '88000'){
    console.log(average);
}
reviewSalary(['32000','50000']);

//Destructuring Objects
var salary = {
    low: '32000',
    average: '50000',
    high: '75000'
};
var {low, average, high} = salary;
console.log(high);

//take an objects variables, and rename them to your liking
var {low: newLow, average: newAverage, high: newHigh} = salary;
console.log(newHigh);

//take an objects variables, and rename them to your liking
var newLog, newAverage, newHigh;
//need parenthesis around this. Not needed for arrays cuz of brackets
({low: newLow, average: newAverage, high: newHigh} = salary);
console.log(newHigh);

//Destructure Strings
let [maxCode, minCode] = 'AZ';
console.log(`min: ${minCode} max: ${maxCode}`);