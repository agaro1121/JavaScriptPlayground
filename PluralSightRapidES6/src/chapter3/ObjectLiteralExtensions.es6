'use strict';

var price = 5.99, quantity = 10;
var productView = {
    price,
    quantity,
    calculateValue() {
        return this.price * this.quantity
    }, //anonymous function
    "calculate value"() { //property name
        return this.price * this.quantity
    }
};
console.log(productView);
console.log(productView.calculateValue());
console.log(productView["calculate value"]()); //how to access property name

var productViewWithLocalVars = {
    price: 7.99,
    quantity: 1,
    calculateValue() {
        return this.price * this.quantity //refers to context, not object itself
    } //anonymous function,
};
console.log(productView.calculateValue());

var field = 'dynamicField';
var method = 'doIt';
var ident = 'productId';
var productViewDynamic = {
    [field]: price, //dynamic field name
    [field + "-001"]: price, //dynamic field name
    [method + "-001"](){ //dynamic method name
        console.log("in a method");
    },
    get [ident] () { return true; }, //dynamic property names work with getters/setters
    set [ident] (value) {}
    /*
      { dynamicField: 5.99,
        'dynamicField-001': 5.99,
        'doIt-001': [Function: doIt-001],
        productId: [Getter/Setter] <----
      }
     */
};
console.log(productViewDynamic);
productViewDynamic['doIt-001']();
console.log(productViewDynamic.productId);