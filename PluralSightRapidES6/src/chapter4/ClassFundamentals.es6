// let newClass = //you can assign classes to variables
class Task {
    constructor() {
        console.log('constructing Task');
    }

    showId() { //no need for function keyword
        console.log('99');
    }
}

let task = new Task();
// let task = new newClass();
console.log(typeof Task); //function
console.log(typeof task); //object
console.log(task instanceof Task);
task.showId();
console.log(task.showId === Task.prototype.showId);
//actually calls the method then does comparison LOL
console.log(task.showId() === Task.prototype.showId());

//ES 5
let Task2 = function () {
    console.log('constructing Task2...');
};
let task2 = {};
Task2.call(task2);

/*
 cannot call `.call()` function and pass in an object
 to change the `.this` reference
*/
// Task.call(task2);

function Project() { }; //constructor function
console.log(window.Project === Project); //true

/*
creating a class does not pollute the gobal namespace
does not get put on the `window` object
or some other global object
 */


class Task3{ }
console.log(window.Task3 === Task3); //false