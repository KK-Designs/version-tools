const { majorVer, parseVersion, compare } = require('../lib/cjs/index.js');

// Will return true
console.log(majorVer('1.0.0', '2.0.0'));

// Will return false
console.log(majorVer('1.0.0', '1.0.1'));

// Will return info about the version
console.log(JSON.stringify(parseVersion('1.0.0-beta')));

// Will return true
console.log(`Output:\n${compare(parseVersion('1.0.1'), parseVersion('1.0.0'), { type: 'greaterThan' })}`);

// Will return false
console.log(`Output:\n${compare(parseVersion('1.0.1'), parseVersion('1.0.0'), { type: 'lessThan' })}`);