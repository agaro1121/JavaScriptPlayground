function *process(){ // `*` signifies generator
    yield 8000;
    yield 8001;
}
var it = process(); //when you run a generator function, it results in an iterator
console.log(it.next());
console.log(it.next());
console.log(it.next());

function *process(){
    let nextId = 7000;
    while(true)
        yield(nextId++);
}
var it = process(); //when you run a generator function, it results in an iterator
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let id of process()) {
    if(id > 7002) break;
    console.log(id);
}