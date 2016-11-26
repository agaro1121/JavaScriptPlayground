'use strict';

/**************************************************************
 *********************** REST OPERATOR ***********************
**************************************************************/
var showCategories = function (productId, ...categories) {
    console.log(categories instanceof Array);
};
showCategories(123, 'search', 'advertising');

var showCategoriesWithArrowSyntax = (productId, ...categories) =>
    console.log(categories instanceof Array);
;
showCategoriesWithArrowSyntax(123, 'search', 'advertising');

/*************************************************************/
var showCategories = function (productId, ...categories) {
    console.log(categories); //actual categories
};
showCategories(123, 'search', 'advertising');

var showCategoriesWithArrowSyntax = (productId, ...categories) =>
    console.log(categories);
;
showCategoriesWithArrowSyntax(123, 'search', 'advertising');

showCategories(123); //Does not pass in categories. Array defaults to empty.
showCategoriesWithArrowSyntax(123); //Does not pass in categories. Array defaults to empty.

/*************************************************************/
var showCategories = function (productId, ...categories) {
};

/*
  * show how many args. Only shows 1 because it ignores
  * the rest parameter `(...categories)`
 */
console.log(showCategories.length);
var showCategories = function (productId, ...categories) {
    console.log(arguments.length); //actual categories
};
//shows 3 arguments. BUT function only has 2 params
showCategories(123, 'search', 'advertising');

var showCategories =
    new Function("...categories", "return categories;");
console.log(showCategories('search', 'advertising'));


/**************************************************************
 *********************** SPREAD OPERATOR ***********************
 **************************************************************/
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);

var newPriceArray = [...prices];
console.log(newPriceArray);

/*
* 1. JavaScript allows you to have trailing comma at the end of a list
* 2. Empty array has 2 elements. Both initialized to undefined
* */
var newPriceArrayEmpty = Array(...[, ,]); //creates new array
console.log(newPriceArrayEmpty);

var newPriceArrayEmpty = [...[, ,]]; //creates new array using only Brackets
console.log(newPriceArrayEmpty);

//maximum CHARACTER here is 4
var maxCode = Math.max(..."43210");
console.log(maxCode);

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray);