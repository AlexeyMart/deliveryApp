import React, { useState, useEffect } from 'react';
import Cart from '../Cart';
import OrderForm from '../OrderForm';
import Order from '../Order';
import Loader from '../Loader';

export default function OrderPage({ match }) {
    const [state, setState] = useState();

    useEffect(() => {
        setTimeout(() => {
            setState(prevState => !prevState);
        }, 500);
    }, []);

    console.log(match);

    const body = state ? (
        <>
            <Order></Order>
            <Cart></Cart>
            <OrderForm></OrderForm>
        </>
    ) : (
        <Loader></Loader>
    );

    return body;
}
