import React, { useState } from 'react';
import { Button, Col, Row } from 'antd';
import Dish from './Dish';

export default function RestaurantMenu({ menu }) {
    const [state, setState] = useState(true);

    console.log('menu= ', menu);

    const body = state && (
        <Row gutter={8} justify="center" type="flex">
            {menu.map(dish => (
                <Col span={4} key={dish.id}>
                    <Dish dish={dish}></Dish>
                </Col>
            ))}
        </Row>
    );

    return (
        <div className="restaurant-menu-container">
            <Button type="default" onClick={() => setState(prevState => !prevState)}>
                {state ? 'Close menu' : 'Open menu'}
            </Button>
            {body}
        </div>
    );
}
