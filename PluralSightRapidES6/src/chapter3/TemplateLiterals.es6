/**
 * Created by Hierro on 11/26/16.
 */

'use strict';

let invoiceNum = '1350';
console.log(`Invoice Number=${invoiceNum}`);

let msg = `A
B
C`;
console.log(msg);
console.log(`Invoice Number=${"INV-"+invoiceNum}`);

let showMessage = message => {
    let invoiceNum = '99';
    console.log(message);
};

showMessage(`Invoice Number=${invoiceNum}`);

function processInvoice(segments) {
    console.log(segments);
}
processInvoice `template`; //tagged template literal


let amount = '2000';


function processInvoice(segments, ...values) {
    console.log(segments);
    console.log(values);
}

console.log("Processing complex template...");
/*
* tagged template literal
* tag = processInvoice
* processInvoice together with Template Literal
* will separate out values and string literals
* */
processInvoice `Invoice: ${invoiceNum} for ${amount}`;
/*
* output
*
 [ 'Invoice: ', ' for ', '' ] //segments - Strings
 [ '1350', '2000' ] //values - interpolated values
* */

