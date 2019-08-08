import React, { useState } from 'react';
import { Card, Button } from 'antd';
import propTypes from 'prop-types';

export default function Dish({ dish: { name, price, ingredients, image } }) {
    const [amount, setAmount] = useState(0);

    const handleDecrement = () => {
        setAmount(prevState => Math.max(0, prevState - 1));
    };

    const handleIncrement = () => {
        setAmount(prevState => prevState + 1);
    };

    return (
        <div className="dish-container">
            <>
                <Card
                    bordered
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
                    <Card.Meta
                        avatar={<img width="60px" height="60px" src={image} alt=""></img>}
                        title={name}
                        description={ingredients.join(', ')}
                    ></Card.Meta>
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
};
