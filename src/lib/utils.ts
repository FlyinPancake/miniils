export function serializeNonPOJOs(obj: unknown) {
	return structuredClone(obj);
}
