let Blog = function() {};
let blog = new Blog();
console.log(blog.toString()); //[object Object]

//Well Known Symbols

//Examples of Meta Programming
let Blog2 = function() {};
let blog2 = new Blog2();
Blog2.prototype[Symbol.toStringTag] = 'Blog Class'; //Symbol.toStringTag => Well Known Symbol
console.log(blog2.toString()); //[object Blog Class]

let values = [8, 12, 16];
console.log([].concat(values)); //[ 8, 12, 16 ]

let values2 = [8, 12, 16];
values2[Symbol.isConcatSpreadable] = false;
console.log([].concat(values2)); //[ [ 8, 12, 16 ] ]

let values3 = [8, 12, 16];
values3[Symbol.toPrimitive] = function(hint) {
    console.log(hint);
    return 42;
};
let sum = values3 + 100;
console.log(sum);