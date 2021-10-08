![version](https://img.shields.io/npm/v/major-version-check?color=blueviolet&style=for-the-badge "Version")
‎
![downloads](https://img.shields.io/npm/dw/major-version-check?color=blue&style=for-the-badge "Downloads")
‎‎‎‎‎
![issues](https://img.shields.io/github/issues/KK-Designs/KK-Designs/Major-version-check?style=for-the-badge "Issues")

![lisence](https://img.shields.io/github/license/KK-Designs/Major-version-check?color=important&style=for-the-badge "Lisence")

---

# Major version check
A small module to check if two specified version numbers are major changes

---

# Changelog (v1.2.1)

• Fixed spelling error in docs \
• Added an error debugging section to the docs \
• Added badges to the docs \
• Formated all the code aka more optimizations \
• And more!

---

# Installation
```
npm i major-version-check
```

---

# Usage

> ⚠ **This library is ONLY compatible with node version 14.17.6 and above**

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
| `options.debug` | boolean | `majorVer(..., ..., { debug: boolean });` | Weather to log debug messages |

# Errors
Errors are common to all, but it doesn't mean its preventable. Read on to solve some common errors with this library. See below for a clear explanation and solution \

| Error                                                                    | Explanation                                                                                                                                  | How to fix                                                                                                          |
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| TypeError: Expected "number" but got foo (reading parameter "bar")       | It means that for one of the function parameters you didn't put a number-string                                                              | If your trying to add a tag try making it like `majorVer('1.0.0-dev', ...)` instead of `majorVer('dev-1.0.0', ...)` |
| TypeError: Expected "string" but got undefined (reading parameter "bar") | It means that one of the parameters you provided was either missing, undefined, or null                                                      | Make sure all the required parameters are provided                                                                  |
| SyntaxError: Unexpected token '.'                                        | This error will only occur if using node versions `13.14.0` and below. This module is only compatible with node versions `14.17.6` and above | Upgrade to node version `14.17.6` and above                                                                         |
