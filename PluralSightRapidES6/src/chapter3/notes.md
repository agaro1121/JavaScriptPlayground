#New ES6 Syntax

##Rest Operator
```
var showCategories = function (productId, ...categories) {
    console.log(categories instanceof Array);
};
```
 - In this example, `...categories` is the Rest Operator
 
##Spread Operator
```
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
```
- In this example, `...prices` is the Rest Operator
- similar to Scala's `something: _*`
