export let projectId = 99;

let projectName = 'BuildIt';
console.log('in module1.js');
/*
* can also do:
* export { projectId as default }
* or:
* export { projectId, projectName as default }
* */
export default projectName;

