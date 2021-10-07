# Major version check
A small module to check if two specified version numbers are major changes

---

# Changelog (v1.0.2)

• Fixed typings \
• Added more keywords to module \
• Updated docs \
• Fixed the demo command \
• More code optimizations 

---

# Installation
```
npm i major-version-check
```

---

# Usage
First you must import the library using the following code:
```javascript
const { majorVer } = require('major-version-check');
// or `import { majorVer } from 'major-version-check';` for Typescript users
```
\
Then all you have to do is call the function with some values:
```javascript
const { majorVer } = require('major-version-check');
// or `import { majorVer } from 'major-version-check';` for Typescript users

// Will return true
console.log(majorVer('1.0.0', '2.0.0'));

// Will return false
console.log(majorVer('1.0.0', '1.0.1'));
```
Thats it! Now you have it running!

# Parameters

| Parameters    | Type    | Usage                                  | Description                   |
|---------------|---------|----------------------------------------|-------------------------------|
| `oldVersion`    | string (required) | `majorVer(oldVersion, ...)`              | The old version to compare    |
| `newVersion`    | string (required) | `majorVer(..., newVersion)`              | The new version to compare |
| `options.debug` | boolean | `majorVer(..., ..., , { debug: boolean });` | Weather to log debug messages |
