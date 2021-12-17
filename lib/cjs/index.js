const meant = require('meant');
module.exports = {
	/**
     * @example const { majorVer } = require('major-version-check');

// Will return true
console.log(`Running code with oldVersion as 1.0.0 and newVersion as 2.0.0 (should return true)\nOutput:\n${majorVer('1.0.0', '2.0.0')}`);

// Will return false
console.log(`Running code with oldVersion as 1.0.0 and newVersion as 1.0.1 (should return false)\nOutput:\n${majorVer('1.0.0', '1.0.1')}`);
	 * @since 1.0.0
     * @param {string} oldVersion
     * @param {string} newVersion
     * @returns {boolean}
     */
	majorVer(oldVersion, newVersion, options) {
		if (options?.debug) console.log('Starting check...');
		if (options?.debug) console.log('Error checking "oldVersion"...');
		if (!oldVersion) throw new TypeError(`Expected "string" but got ${oldVersion} (reading parameter "oldVersion")`);
		if (options?.debug) console.log('Error checking "newVersion"...');
		if (!newVersion) throw new TypeError(`Expected "string" but got ${newVersion} (reading parameter "oldVersion")`);

		const oldArr = oldVersion.split('.');
		if (options?.debug) console.log('Reading "oldVersion"...');
		const newArr = newVersion.split('.');
		if (options?.debug) console.log('Reading "newVersion"...');
		let major;
		if (options?.debug) console.log('Error checking "oldVersion"...');
		if (isNaN(Number(oldArr[0]))) throw new TypeError(`Expected "number" but got ${oldArr[0]} (reading parameter "oldVersion")`);
		if (options?.debug) console.log('Error checking "newVersion"...');
		if (isNaN(Number(newArr[0]))) throw new TypeError(`Expected "number" but got ${newArr[0]} (reading parameter "newVersion")`);
		if (options?.debug) console.log('Starting check...');
		if (oldArr[0] === newArr[0]) {
			major = false;
		} else {
			major = true;
		}
		if (options?.debug) console.log('Check was successful ✔');
		return major;
	},
	/**
	 * @since 1.3.0
     * @example const { parseVersion } = require('major-version-check');

// Will return `{"versionNumbers":["1","0","0"],"versionTags":["beta"]}`
console.log(`Running code with version as 1.0.0-beta\nOutput:\n${JSON.stringify(parseVersion('1.0.0-beta'))}`);
     * @param {string} version
     * @returns {{"versionNumbers":string[],"versionTags":string[]}}
     */
	parseVersion(version, options) {
		if (options?.debug) console.log('Parsing version...');
		if (options?.debug) console.log('Reading parameter "version"...');
		if (options?.debug) console.log('Error checking parameter "version"...');
		if (!isNaN(Number(version)) || !version) throw new TypeError(`Expected "string" but got ${version}`);
		let verArr = version.split('.');
		if (options?.debug) console.log('Error checking parameter "version" from "verArr" (library)...');
		if (isNaN(Number(verArr[0]))) throw new TypeError(`Expected "number" but got ${verArr[0]} (reading parameter "version" from "verArr" (library))`);
		if (options?.debug) console.log('Getting tags...');
		const verTags = version.split('-');
		if (version.includes('-')) {
			verArr = version.substring(0, version.indexOf('-')).split('.');
		} else {
			// Do nothing
		}
		if (verTags.length <= 0) {
			if (options?.debug) console.log('No tags found');
		}
		verTags.shift();
		if (options?.debug) console.log('Version parse successful ✔');
		return { versionNumbers: verArr, versionTags: verTags };
	},
	/**
	 * @since 1.4.0
     * @example const { compare } = require('major-version-check');

// Will return true
console.log('Output:\n' + compare(parseVersion('1.0.1'), parseVersion('1.0.0'), { type: 'greaterThan' }));
     * @param {{ versionNumbers: string[]; }} version
     * @param {{ versionNumbers: string[]; }} compare
     * @param {{ type: 'equal' | 'lessThan' | 'greaterThan' | 'lessThanOrEqualTo' | 'greaterThanOrEqualTo'; }} options
     * @returns {boolean}
     */
	compare(version, compare, options) {
		const types = [
			'equal',
			'lessThan',
			'greaterThan',
			'lessThanOrEqualTo',
			'greaterThanOrEqualTo',
		];
		if (options.type === 'equal') {
			const number = Number(version.versionNumbers.join(''));
			const compared = Number(compare.versionNumbers.join(''));
			let equal;
			if (number == compared) {
				equal = true;
			} else {
				equal = false;
			}
			return equal;
		} else if (options.type === 'lessThan') {
			const number = Number(version.versionNumbers.join(''));
			const compared = Number(compare.versionNumbers.join(''));
			let equal;
			if (number < compared) {
				equal = true;
			} else {
				equal = false;
			}
			return equal;
		} else if (options.type === 'greaterThan') {
			const number = Number(version.versionNumbers.join(''));
			const compared = Number(compare.versionNumbers.join(''));
			let equal;
			if (number > compared) {
				equal = true;
			} else {
				equal = false;
			}
			return equal;
		} else if (options.type === 'lessThanOrEqualTo') {
			const number = Number(version.versionNumbers.join(''));
			const compared = Number(compare.versionNumbers.join(''));
			let equal;
			if (number <= compared) {
				equal = true;
			} else {
				equal = false;
			}
			return equal;
		} else if (options.type === 'greaterThanOrEqualTo') {
			const number = Number(version.versionNumbers.join(''));
			const compared = Number(compare.versionNumbers.join(''));
			let equal;
			if (number >= compared) {
				equal = true;
			} else {
				equal = false;
			}
			return equal;
		} else {
			let error;
			const result = meant(options.type, types);
			if (result.length > 0) {
				error = `Invalid type; Expected \`equal\`, \`lessThan\`, \`greaterThan\`, \`lessThanOrEqualTo\`, or \`greaterThanOrEqualTo\`. Did you mean ${result.join(' or ')}?`;
			} else {
				error = 'Invalid type; Expected `equal`, `lessThan`, `greaterThan`, `lessThanOrEqualTo`, or `greaterThanOrEqualTo`';
			}
			throw new TypeError(error);
		}
	},
};