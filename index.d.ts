declare module '@dorafactory/circomlib' {
	export interface SMT {
		insert(
			key: Uint8Array | string,
			value: Uint8Array | string
		): Promise<void>;
		delete(key: Uint8Array | string): Promise<void>;
		find(key: Uint8Array | string): Promise<any>;
	}

	export const smt: any;
	export const eddsa: any;
	export const mimc7: {
		hash(x: string | number, k?: string): string;
		multiHash(arr: (string | number)[], k?: string): string;
	};
	export const mimcsponge: {
		hash(
			xL: string | number,
			xR: string | number,
			k?: string
		): [string, string];
		multiHash(arr: (string | number)[], key?: string): [string, string];
	};
	export const babyJub: any;
	export const pedersenHash: any;
	export const SMT: any;
	export const SMTMemDB: any;
	export const poseidon: any;
	export const poseidonPerm: any;
	export const poseidonEncrypt: any;
	export const poseidonDecrypt: any;
}

declare module 'ffjavascript' {
	export const Scalar: any;
	export const utils: any;
}

declare module 'blake-hash' {
	interface BlakeHash {
		update(data: Buffer): BlakeHash;
		digest(): Buffer;
	}

	function createBlakeHash(algorithm: string): BlakeHash;
	export default createBlakeHash;
}
