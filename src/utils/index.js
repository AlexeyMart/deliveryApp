import produce from 'immer';

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

const orderToDataSource = order => {
    const raw = produce(order, draft => {
        for (let key in draft) {
            draft[key].key = key;
        }
    });

    return Object.values(raw);
};

export { deepCloneArray, toKeyValueStructure, orderToDataSource };
