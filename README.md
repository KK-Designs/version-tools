[![version](https://img.shields.io/npm/v/major-version-check?color=blueviolet&style=for-the-badge "Version")](https://github.com/KK-Designs/version-tools/releases/tag/v1.3.3)
‎
[![weekly_downloads](https://img.shields.io/npm/dw/major-version-check?color=blue&style=for-the-badge "Weekly Downloads")](https://www.npmjs.com/package/major-version-check#:~:text=Weekly%20Downloads)
‎
![downloads](https://badgen.net/npm/dt/major-version-check "Downloads")
‎
[![issues](https://img.shields.io/github/issues/KK-Designs/KK-Designs/version-tools?style=for-the-badge "Issues")](https://github.com/KK-Designs/version-tools/issues)
‎
[![license](https://img.shields.io/github/license/KK-Designs/version-tools?color=important&style=for-the-badge "License")](https://github.com/KK-Designs/version-tools/blob/master/LICENSE)
‎
[![major-version-check](https://nodei.co/npm/major-version-check.png "Major-version-check on NPM")](https://www.npmjs.com/package/major-version-check)
---

# Version tools
A small module to check the information about versions, such as comparing, parsing version data, and checking if the two version is a major change.

---

# Changelog (`v1.4.1`)

• **Fixed conflict in docs**. \
• Added new function to `readme.md`. \
• Added new function to tests. \
• No longer use jest as it isn't required. \
• Updated `tsconfig.json`. \
• Added new scripts to `package.json`. \
• Some more linting. \
• Added the version check for old node versions.

# To-do
• Make `parseVersion()` function return version numbers as a `int` instead of a `string`.

---

# Installation

```sh-session
npm i major-version-check
```

---

# Usage

> ⚠ **This library is ONLY compatible with node version 14 and above**

First you must import the library using the following code:
```javascript
const versionTools = require('major-version-check');
// or `import * as versionTools from 'major-version-check';` for Typescript users
```
\
Then all you have to do is call the function with some values:
```javascript
const versionTools = require('major-version-check');
// or `import * as versionTools from 'major-version-check';` for Typescript users

// Will return true
console.log(versionTools.majorVer('1.0.0', '2.0.0'));

// Will return false
console.log(versionTools.majorVer('1.0.0', '1.0.1'));

// Will return info about the version
console.log(JSON.stringify(versionTools.parseVersion('1.0.0-beta')));

// Will return true
console.log(`Output:\n${versionTools.compare(versionTools.parseVersion('1.0.1'), versionTools.parseVersion('1.0.0'), { type: 'greaterThan' })}`);

// Will return false
console.log(`Output:\n${versionTools.compare(versionTools.parseVersion('1.0.1'), versionTools.parseVersion('1.0.0'), { type: 'lessThan' })}`);
```
**Thats it! Now you have it running!**

# Parameters
### Parameter info for `majorVer()`

| Parameters    | Type    | Usage                                  | Description                   |
|---------------|---------|----------------------------------------|-------------------------------|
| `oldVersion`    | string (required) | `majorVer(oldVersion, ...);`              | The old version to compare    |
| `newVersion`    | string (required) | `majorVer(..., newVersion);`              | The new version to compare |
| `options.debug` | boolean | `majorVer(..., ..., { debug: boolean });` | Weather to log debug messages |

### Parameter info for `parseVersion()`

| Parameters    | Type    | Usage                                  | Description                   |
|---------------|---------|----------------------------------------|-------------------------------|
| `version`    | string (required) | `parseVersion(version, ...);`              | The version to parse    |
| `options.debug` | boolean | `parseVersion(..., { debug: boolean });` | Weather to log debug messages |

### Parameter info for `compare()`

| Parameters    | Type    | Usage                                  | Description                   |
|---------------|---------|----------------------------------------|-------------------------------|
| `version`    | object (required) | `compare(version, ...);`              | The version to compare    |
| `comparator`    | string (required) | `compare(..., comparator, ...);`              | The second version to compare    |
| `options.debug` | boolean | `compare(..., ..., { debug: boolean });` | Weather to log debug messages |

#
[![](backToTop.png?raw=true "Back to top")](#readme)
