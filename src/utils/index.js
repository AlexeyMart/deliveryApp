function deepCloneArray(array) {
    return array.map(item => item.slice());
}

function toKeyValueStructure(array) {
    return array.reduce(
        (acc, item) => ({
            ...acc,
            [item.id]: item,
        }),
        {},
    );
}

export { deepCloneArray, toKeyValueStructure };
