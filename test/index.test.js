const { majorVer } = require('../lib/index.js');
 
// Will return true
console.log(`Running code with oldVersion as 1.0.0 and newVersion as 2.0.0 (should return true)\nOutput:\n${majorVer('1.0.0', '2.0.0')}`);
 
// Will return false
console.log(`Running code with oldVersion as 1.0.0 and newVersion as 1.0.1 (should return false)\nOutput:\n${majorVer('1.0.0', '1.0.1')}`);