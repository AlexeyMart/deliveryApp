import React, { useState } from 'react';
import { Card, Button } from 'antd';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../action-creators/index';

function Dish({
    dish: { name, price, ingredients, image, id },
    addItemToCart,
    removeItemFromCart,
}) {
    const [amount, setAmount] = useState(0);

    const handleIncrement = () => {
        setAmount(prevState => prevState + 1);
        addItemToCart(id, amount, price, name);
    };

    const handleDecrement = () => {
        setAmount(prevState => Math.max(prevState - 1, 0));
        removeItemFromCart(id, amount, price, name);
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
                    <Card.Meta title={name} description={'hz'}></Card.Meta>
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

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    addItemToCart: addItem,
    removeItemFromCart: removeItem,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dish);
