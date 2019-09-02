import React from 'react';
import { Card, Button } from 'antd';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../action-creators/index';
import { dishSelector, amountDishSelector, restaurantTitleSelector } from '../selectors/index';

function Dish({
    amount,
    restaurant,
    dish: { name, price, ingredients, image, id },
    addItemToCart,
    removeItemFromCart,
}) {
    const handleIncrement = () => {
        addItemToCart(id, amount, price, name, restaurant);
    };

    const handleDecrement = () => {
        removeItemFromCart(id, amount, price, name, restaurant);
    };

    return (
        <div className="dish-container">
            <>
                <Card
                    bordered
                    cover={<img src={image} height={170} alt=""></img>}
                    actions={[
                        <>
                            <p>Price: {price} $</p>
                            <p>Amount: {amount}</p>
                        </>,
                        <>
                            <p>Total: {price * amount} $</p>
                            <Button.Group>
                                <Button
                                    type="primary"
                                    icon="minus"
                                    onClick={handleDecrement}
                                ></Button>
                                <Button
                                    type="primary"
                                    icon="plus"
                                    onClick={handleIncrement}
                                ></Button>
                            </Button.Group>
                        </>,
                    ]}
                >
                    <Card.Meta title={name} description={ingredients.join(' ')}></Card.Meta>
                </Card>
            </>
        </div>
    );
}

Dish.propTypes = {
    dish: propTypes.shape({
        name: propTypes.string,
        price: propTypes.number,
        ingredients: propTypes.array,
        image: propTypes.string,
    }).isRequired,
    addItemToCart: propTypes.func,
    removeItemFromCart: propTypes.func,
};

const mapStateToProps = (store, ownProps) => ({
    dish: dishSelector(store, ownProps),
    amount: amountDishSelector(store, ownProps),
    restaurant: restaurantTitleSelector(store, ownProps),
});

const mapDispatchToProps = {
    addItemToCart: addItem,
    removeItemFromCart: removeItem,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dish);
