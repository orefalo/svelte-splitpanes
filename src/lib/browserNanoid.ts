// a crypto unsafe nanoid - but sufficient to support a channel ui
function getRandomValues(ar: Uint8Array) {
	let i = ar.length;
	while (i--) {
		ar[i] = Math.floor(Math.random() * 256);
	}
	return ar;
}

export const nanoid = (t = 21) => {
	let e = '';
	const r = getRandomValues(new Uint8Array(t));
	for (; t--; ) {
		const n = 63 & r[t];
		e += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? '_' : '-';
	}
	return e;
};
