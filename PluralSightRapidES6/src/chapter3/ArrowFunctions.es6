
var someObject = {
    price: 5.99,
    quantity: 1,
    calc: function (){ return this.price * this.quantity },
    process: function () { console.log(this); }, //actual object
    process2: () => console.log(this) //context of code we're running
};

console.log(someObject.calc());
someObject.process();
someObject.process2(); //would return Window{...} in a browser

