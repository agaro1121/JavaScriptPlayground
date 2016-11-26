/**
 * Created by Hierro on 11/26/16.
 */
var categories = ['fruits', 'veggies', 'carbs'];
for(var item of categories) {
    console.log(item);
}

var categories = [,,];
for(let item of categories) {
    console.log(item);
}

var codes = "ABCDF";
var count = 0;
for (code of codes) { //don't need var/let in front of temp variable
    count ++;
}
console.log(count);

var categories = ['fruits', 'veggies', 'carbs'];
console.log(categories.map(c => c + '1'));

/* no eta-expansion
* fruits 0 [ 'fruits', 'veggies', 'carbs' ]
  veggies 1 [ 'fruits', 'veggies', 'carbs' ]
  carbs 2 [ 'fruits', 'veggies', 'carbs' ]
* */
categories.forEach(console.log);
categories.forEach(cat => console.log(cat));