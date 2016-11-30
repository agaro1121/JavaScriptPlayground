function *process(){ // `*` signifies generator
    yield 8000;
}
var it = process();
console.log(it.next()); //8000

function *process(){ // `*` signifies generator
   yield;
}
var it = process();
console.log(it.next()); //undefined

function *process(){ // `*` signifies generator
    let result = yield;
    console.log(`result is ${result}`);
}
var it = process();
console.log(it.next());
console.log(it.next(200)); //sets result = 200

function *process(){ // `*` signifies generator
    let newArray = [yield, yield, yield];
    console.log(newArray[2]);
}
var it = process();
console.log(it.next());
console.log(it.next(2));
console.log(it.next(4));
console.log(it.next(42));

function *process(){
    yield 42;
    yield [1, 2, 3];
}
var it = process();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function *process(){
    yield 42;
    yield* [1, 2, 3]; //`*` treats yield as it's own generator. So 42, 1, 2, 3, undefined
}
var it = process();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);