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

# Changelog (`v1.4.0`)

• Added hybrid support for `ESM`. \
• Added eslint. \
• Added example types. \
• Updated dependencies. \
• Re-added demo script. \
• Fixed spelling error in docs. \
• Added a "to-do" in the docs. \
• Fixed bug in `parseVersion()` where it would return a plain array instead of an object when no tags existed. \
• Fixed and updated types. \
• Changed license from `Apache-2.0` to `CC0-1.0`. \
• Fixed the version check for old node versions \
• Code organization and optimizations.

# To-do
• Make `parseVersion()` function return version numbers as a `int` instead of a `string`.

---

# Installation

```
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
<<<<<<< HEAD
| `version`    | string (required) | `parseVersion(version, ...)`              | The old version to compare    |
| `options.debug` | boolean | `parseVersion(..., { debug: boolean });` | Weather to log debug messages |
=======
| `version`    | string (required) | `parseVersion(version, ...);`              | The old version to compare    |
| `options.debug` | boolean | `parseVersion(..., { debug: boolean });` | Weather to log debug messages |

# Errors
Errors are common to all, but it doesn't mean its not preventable. Read on to solve some common errors with this library. See below for a clear explanation and solution

| Error                                                                    | Explanation                                                                                                                                  | How to fix                                                                                                          |
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `TypeError: Expected "number" but got foo (reading parameter "bar")`       | It means that for one of the function parameters you didn't put a number-string                                                              | If your trying to add a tag try making it like `majorVer('1.0.0-dev', ...)` instead of `majorVer('dev-1.0.0', ...)` |
| `TypeError: Expected "string" but got undefined (reading parameter "bar")` | It means that one of the parameters you provided was either missing, undefined, or null                                                      | Make sure all the required parameters are provided                                                                  |
| `SyntaxError: Unexpected token '.'`                                        | This error will only occur if using node versions `13.14.0` and below. This module is only compatible with node versions `14.17.6` and above | Upgrade to node version `14.17.6` and above                                                                         |
# 
[![](backToTop.png?raw=true "Back to top")](#readme)
>>>>>>> 5e2ffb389c16edf1277aa117d29950adbbef5ebc
