declare module "version-tools" {
	export function majorVer(oldVersion: string, newVersion: string, options?: { debug: boolean; }): boolean;
	export function parseVersion(version: string, options?: { debug: boolean; }): {"versionNumbers": string[], "versionTags"?: string[]; };
	export function compare(version: {"versionNumbers": string[], "versionTags"?: string[]; }, compare: {"versionNumbers": string[], "versionTags"?: string[]; }, options: { type: 'equal' | 'lessThan' | 'greaterThan' | 'lessThanOrEqualTo' | 'greaterThanOrEqualTo', debug?: boolean;}): boolean;
}