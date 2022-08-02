import { readable, type Readable } from 'svelte/store';

export interface SwitchableStoreResult<T> {
	store: Readable<T>;
	update: (store?: Readable<T>) => void;
}

export function switchableStore<T extends K, K>(
	initialStore?: Readable<T> | undefined,
	unsetValue: K = undefined
): SwitchableStoreResult<T> {
	let currentStore = initialStore;
	let _set: ((value: T) => void) | undefined = undefined;
	let unsubscribe: (() => void) | undefined = undefined;

	function makeSubscription(store: Readable<T> | undefined, set: (value: T) => void) {
		if (store) {
			return store.subscribe((val) => {
				set(val);
			});
		} else {
			set(unsetValue as T);
			return undefined;
		}
	}

	const store = readable<T>(undefined as T, (set) => {
		unsubscribe = makeSubscription(currentStore, set);
		_set = set;

		return () => {
			if (unsubscribe) {
				unsubscribe();
			}
			unsubscribe = undefined;
			_set = undefined;
		};
	});

	const update = (store?: Readable<T>) => {
		currentStore = store;
		if (_set) {
			if (unsubscribe) {
				unsubscribe();
			}
			unsubscribe = makeSubscription(currentStore, _set);
		}
	};

	return { store, update };
}
