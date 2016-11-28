'use strict';

var _module = require('module1.js');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("starting in base");

console.log("Saluton from base.js bitches !!!");
// console.log(projectId); //no longer valid cuz projectId was aliased
// console.log(`${projectName} has id: ${projectId}`); //no longer valid cuz projectId was aliased
console.log(_module.projectName + ' has id: ' + _module.projectId); //import alias
console.log("ending in base...");

//implicitly brings in default export from module1.js
console.log(_module2.default);

//implicitly brings in default export from module1.js
console.log(_module2.default);
//# sourceMappingURL=base.js.map