import {projectId as id, projectName} from 'module1.js';

console.log("starting in base");
console.log("Saluton from base.js bitches !!!");
import {projectId} from 'module1.js';
console.log(projectId); //no longer valid cuz projectId was aliased
console.log(`${projectName} has id: ${projectId}`); //no longer valid cuz projectId was aliased
console.log(`${projectName} has id: ${id}`); //import alias
console.log("ending in base...");

import someValue from 'module1.js'; //implicitly brings in default export from module1.js
console.log(someValue);

import { default as myPorjectName } from 'module1.js'; //explicitly brings in default export from module1.js
console.log(myPorjectName);

/*
* imports all exports from module1.js and
* creates object with imports as fields
* */
import * as values from 'module1.js';
console.log(values);