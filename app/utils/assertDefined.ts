export const assertDefined = <T>(
    value: T | null | undefined,
): asserts value is T => {
    if (value === undefined || value === null) {
        throw new Error(
            `Expected 'value' to be defined, but received ${value}`,
        );
    }
};
