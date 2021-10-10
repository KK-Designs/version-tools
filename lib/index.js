const process = require('process');
module.exports = {
    majorVer(oldVersion, newVersion, options) {
        if (options?.debug) console.log("Starting check...");
        if (options?.debug) console.log("Error checking \"oldVersion\"...");
        if (!oldVersion) throw new TypeError(`Expected "string" but got ${oldVersion} (reading parameter "oldVersion")`);
        if (options?.debug) console.log("Error checking \"newVersion\"...");
        if (!newVersion) throw new TypeError(`Expected "string" but got ${newVersion} (reading parameter "oldVersion")`);

        let oldArr = oldVersion.split(".");
        if (options?.debug) console.log("Reading \"oldVersion\"...");
        let newArr = newVersion.split(".");
        if (options?.debug) console.log("Reading \"newVersion\"...");
        let major;
        if (options?.debug) console.log("Error checking \"oldVersion\"...");
        if (isNaN(oldArr[0])) throw new TypeError(`Expected "number" but got ${oldArr[0]} (reading parameter "oldVersion")`);
        if (options?.debug) console.log("Error checking \"newVersion\"...");
        if (isNaN(newArr[0])) throw new TypeError(`Expected "number" but got ${newArr[0]} (reading parameter "newVersion")`);
        if (options?.debug) console.log("Starting check...");
        if (oldArr[0] === newArr[0]) {
            major = false;
        } else {
            major = true;
        }
        if (options?.debug) console.log("Check was successful ✔");
        return major;
    },
    parseVersion(version, options) {
        if (options?.debug) console.log("Parsing version...");
        if (options?.debug) console.log("Reading parameter \"version\"...");
        if (options?.debug) console.log("Error checking parameter \"version\"...");
        if (!isNaN(version) || !version) throw new TypeError(`Expected "string" but got ${version}`);
        let verArr = version.split(".");
        if (options?.debug) console.log("Error checking parameter \"version\" from \"verArr\" (library)...");
        if (isNaN(verArr[0])) throw new TypeError(`Expected "number" but got ${verArr[0]} (reading parameter "version" from "verArr" (library))`);
        if (options?.debug) console.log("Getting tags...");
        let verTags = version.split("-");
        if (version.includes('-')) {
            verArr = version.substring(0, version.indexOf('-')).split(".");
        } else {
            return verArr;
        }
        if (verTags.length <= 0) {
            if (options?.debug) console.log("No tags found");
        }
        verTags.shift();
        if (options?.debug) console.log("Version parse successful ✔");
        return { versionNumbers: verArr, versionTags: verTags };
    },
};