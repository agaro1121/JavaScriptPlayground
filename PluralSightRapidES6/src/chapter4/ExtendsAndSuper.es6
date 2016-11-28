class Project {
    constructor(){
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor(){
        /*
        * need this super call to to have this constructor.
        * Even if the super class does not have a constructor.
        * */
        super();
        console.log('constructing SoftwareProject...');
    }
}

let p = new SoftwareProject();

// Object Literals
let project2 = {
    getTaskCount() {
        return 50;
    }
};

let softwareProject2 = {
    getTaskCount() {
        return super.getTaskCount() + 7;
    }
};

//creates anonymous class with `softwareProject2 extends project2`
Object.setPrototypeOf(softwareProject2, project2);
console.log(softwareProject2.getTaskCount());

