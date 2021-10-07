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
};