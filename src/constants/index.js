const CHANGE_RATING = 'CHANGE_RATING';

const ADD_ITEM = 'ADD_ITEM';

const REMOVE_ITEM = 'REMOVE_ITEM';

const ADD_REVIEW = 'ADD_REVIEW';

const LOAD_ALL_RESTAURANTS = 'LOAD_ALL_RESTAURANTS';

const START = '_START';

const SUCCESS = '_SUCCESS';

const ERROR = '_ERROR';

const LOAD_ALL_REVIEWS = 'LOAD_ALL_REVIEWS';

const LOAD_RESTAURANT_MENU = 'LOAD_RESTAURANT_MENU';

const LOAD_ALL_USERS = 'LOAD_ALL_USERS';

const CHANGE_LOCATION = '@@router/LOCATION_CHANGE';

const columnsToOrderTable = [
    {
        title: 'Dish',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.amount - b.amount,
    },
    {
        title: 'Sum',
        dataIndex: 'sum',
        key: 'sum',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.sum - b.sum,
    },
    {
        title: 'Restaurant',
        dataIndex: 'restaurant',
        key: 'restaurant',
        sorter: (a, b) => a.restaurant.length - b.restaurant.length,
    },
];

export {
    CHANGE_RATING,
    REMOVE_ITEM,
    ADD_ITEM,
    ADD_REVIEW,
    LOAD_ALL_RESTAURANTS,
    START,
    SUCCESS,
    ERROR,
    LOAD_ALL_REVIEWS,
    LOAD_RESTAURANT_MENU,
    LOAD_ALL_USERS,
    columnsToOrderTable,
    CHANGE_LOCATION,
};
