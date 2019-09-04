import React from 'react';
import RestaurantsList from '../RestaurantsList';
import OrderForm from '../OrderForm';
import Filter from '../Filter';
import Cart from '../Cart';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default function MainPage({ match }) {
    console.log(match);
    return (
        <>
            <Filter></Filter>
            <RestaurantsList></RestaurantsList>
            <Cart></Cart>
            <Button size="large" type="primary" style={{ display: 'block', margin: '10px auto' }}>
                <NavLink to="/order">Show order</NavLink>
            </Button>
            <OrderForm></OrderForm>
        </>
    );
}
