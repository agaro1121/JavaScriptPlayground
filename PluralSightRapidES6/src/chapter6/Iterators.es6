var ids = [9000, 9001, 9002];
console.log(typeof ids[Symbol.iterator]); //function

var it = ids[Symbol.iterator]();
console.log(it.next()); //{ value: 9000, done: false }
console.log(it.next());
console.log(it.next());
console.log(it.next());

var idMaker = {
    [Symbol.iterator](){
        let nextId = 8000;
        return { //returns anonymous object that is used as Iterator itself.
            next(){ //iterator object contains `next()`
                return {
                    value: nextId++,
                    done: false
                };
            }
        }
    }
};
var it = idMaker[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let v of idMaker) { //uses iterator automatically
    if (v > 8006) break;
    console.log(v);
}

var idMaker = {
    [Symbol.iterator](){
        let nextId = 8000;
        return { //returns anonymous object that is used as Iterator itself.
            next(){ //iterator object contains `next()`
                let value = nextId > 8002 ? undefined : nextId++;
                let done = !value; // if(value === undefined) true
                return {
                    value: value,
                    done: done
                };
            }
        }
    }
};
for (let v of idMaker) { //uses iterator automatically
     console.log(v);
}