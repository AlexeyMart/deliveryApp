import React, { useContext } from 'react';
import RestaurantsList from '../RestaurantsList';
import OrderForm from '../OrderForm';
import Filter from '../Filter';
import Cart from '../Cart';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { context } from '../../contexts/language';
import translate from '../../locale/translate';

export default function MainPage({ match }) {
    console.log(match);
    const language = useContext(context);
    return (
        <>
            <Filter></Filter>
            <RestaurantsList></RestaurantsList>
            <Cart></Cart>
            <Button size="large" type="primary" style={{ display: 'block', margin: '10px auto' }}>
                <NavLink to="/order">{translate(language, 'show-order-btn')}</NavLink>
            </Button>
            <OrderForm></OrderForm>
        </>
    );
}
