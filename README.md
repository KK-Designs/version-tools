[![version](https://img.shields.io/npm/v/version-tools?color=blueviolet&style=for-the-badge "Version")](https://github.com/KK-Designs/version-tools/releases/tag/v1.2.2)
‎
[![weekly_downloads](https://img.shields.io/npm/dw/version-tools?color=blue&style=for-the-badge "Weekly Downloads")](https://www.npmjs.com/package/version-tools#:~:text=Weekly%20Downloads)

![downloads](https://badgen.net/npm/dt/version-tools "Downloads")
‎‎‎
[![issues](https://img.shields.io/github/issues/KK-Designs/KK-Designs/version-tools?style=for-the-badge "Issues")](https://github.com/KK-Designs/version-tools/issues)

[![lisence](https://img.shields.io/github/license/KK-Designs/version-tools?color=important&style=for-the-badge "Lisence")](https://raw.githubusercontent.com/KK-Designs/version-tools/master/LICENSE)

---

# Major version check
A small module to check if two specified version numbers are major changes

---

# Changelog (`v1.3.0`)

• Fixed spelling error in docs \
• Added a new total downloads badge to docs \
• Added a new function to parse versions \
• New types declarations \
• Fixed types declarations \
• Changed package name and more rebranding \
• Added more keywords to match new version \
• Removed the "demo" command \
• Updated docs \
• And many more! 

**NOTE:** *This update is not fully tested. Using proper parameters WILL work but if you don't it may error. Read the documentation for  proper usage. If you encounter any problems with the new changes make an issue on the GitHub page* | [Create issue](https://github.com/KK-Designs/version-tools/issues/new "Create Issue")

---

# Migration guide
Since `v1.3.0` came out some breaking changes. See here how to migrate.
## Major name change
We changed the bame of the package, so you might get errors. See below of how to fix this.
```diff
- const { majorVer } = require('version-tools');
+ const { majorVer, parseVersion } = require('version-tools');
```
**And thats it! You've successfully migrated your code to the latest version!**
---

# Installation
```
npm i version-tools
```

---

# Usage

> ⚠ **This library is ONLY compatible with node version 14.17.6 and above**

First you must import the library using the following code:
```javascript
const { majorVer } = require('version-tools');
// or `import { majorVer } from 'version-tools';` for Typescript users
```
\
Then all you have to do is call the function with some values:
```javascript
const { majorVer } = require('version-tools');
// or `import { majorVer } from 'version-tools';` for Typescript users

// Will return true
console.log(majorVer('1.0.0', '2.0.0'));

// Will return false
console.log(majorVer('1.0.0', '1.0.1'));
```
**Thats it! Now you have it running!**

# Parameters
### Parameter info for `majorVer()`

| Parameters    | Type    | Usage                                  | Description                   |
|---------------|---------|----------------------------------------|-------------------------------|
| `oldVersion`    | string (required) | `majorVer(oldVersion, ...)`              | The old version to compare    |
| `newVersion`    | string (required) | `majorVer(..., newVersion)`              | The new version to compare |
| `options.debug` | boolean | `majorVer(..., ..., { debug: boolean });` | Weather to log debug messages |

### Parameter info for `parseVersion()`

| Parameters    | Type    | Usage                                  | Description                   |
|---------------|---------|----------------------------------------|-------------------------------|
| `version`    | string (required) | `parseVersion(version, ...)`              | The old version to compare    |
| `options.debug` | boolean | `parseVersion(..., { debug: boolean });` | Weather to log debug messages |

# Errors
Errors are common to all, but it doesn't mean its not preventable. Read on to solve some common errors with this library. See below for a clear explanation and solution \

| Error                                                                    | Explanation                                                                                                                                  | How to fix                                                                                                          |
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| TypeError: Expected "number" but got foo (reading parameter "bar")       | It means that for one of the function parameters you didn't put a number-string                                                              | If your trying to add a tag try making it like `majorVer('1.0.0-dev', ...)` instead of `majorVer('dev-1.0.0', ...)` |
| TypeError: Expected "string" but got undefined (reading parameter "bar") | It means that one of the parameters you provided was either missing, undefined, or null                                                      | Make sure all the required parameters are provided                                                                  |
| SyntaxError: Unexpected token '.'                                        | This error will only occur if using node versions `13.14.0` and below. This module is only compatible with node versions `14.17.6` and above | Upgrade to node version `14.17.6` and above                                                                         |
