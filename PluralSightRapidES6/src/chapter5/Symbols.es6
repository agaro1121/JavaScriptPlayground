let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);
console.log(eventSymbol.toString()); //shows initial string of symbol description

const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
console.log(CALCULATE_EVENT_SYMBOL.toString());

let s = Symbol('event');
let s2 = Symbol('event'); //gets unique symbol, irrespective of description being same
console.log(s === s2); //false

let s3 = Symbol.for('event');
console.log(s3.toString());
let s4 = Symbol.for('event');
console.log(s3 === s4); //true

let description = Symbol.keyFor(s3);
console.log(description);

let article = {
    title: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My Article'
};

console.log(article[Symbol.for('article')]); //accessing field using symbol look up
console.log(Object.getOwnPropertyNames(article)); //shows non-symbol fields
console.log(Object.getOwnPropertySymbols(article)); //shows symbol fields

