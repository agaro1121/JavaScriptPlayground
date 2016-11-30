function *process() {
    try {
        yield 9000;
        yield 9001;
        yield 9002;
    }
    catch(e){

    }
}

var it = process();
console.log(it.next().value);
console.log(it.throw('foo')); //throws exception. Generator swallowed it. No more values :-(
console.log(it.next());




function *process2() {
        yield 9000;
        yield 9001;
        yield 9002;
}

var it = process2();
console.log(it.next().value);
// console.log(it.throw('foo')); //craps out here
// console.log(it.next());





function *process3() {
    yield 9000;
    yield 9001;
    yield 9002;
}

var it = process3();
console.log(it.next().value);
//firefox only
console.log(it.return('foo')); //{ value: 'foo', done: true }
console.log(it.next());

