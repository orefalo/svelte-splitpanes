/**
 * Generate a callback that is safe to be called even if `callbackObjectGetter()` is nullish on that moment.
 *
 * In the case of the object is nullish, invoking the callback will do nothing.
 */
const carefullCallbackGenerator =
	<CallbacksObject extends object, Callback extends keyof CallbacksObject>(
		callbackObjectGetter: () => CallbacksObject | null | undefined,
		callbackName: Callback
	) =>
	(
		value: Parameters<CallbacksObject[Callback] extends (value: unknown) => void ? CallbacksObject[Callback] : never>[0]
	) => {
		const callbackObject = callbackObjectGetter();
		if (callbackObject != null) {
			// @ts-expect-error it's safe to pass this value, only because of TS reasons it's not accepted
			callbackObject[callbackName](value);
		}
	};

/**
 * This is an object of callbacks that are safe to be called even if `callbackObjectGetter()` is nullish on that moment.
 *
 * In the case of the object is nullish, invoking the callbacks will do nothing.
 */
export const carefullCallbackObject = <CallbacksObject extends object, Callbacks extends keyof CallbacksObject>(
	callbackObjectGetter: () => CallbacksObject | undefined,
	callbackNames: ReadonlyArray<Callbacks>
) =>
	Object.fromEntries(
		callbackNames.map((cb) => [cb, carefullCallbackGenerator(callbackObjectGetter, cb)])
	) as unknown as Pick<CallbacksObject, Callbacks>;
