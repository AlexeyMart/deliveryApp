import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { orderCartSelector } from '../selectors/index';

function Cart({ order: [amount, price] }) {
    return (
        <div className="cart-container">
            <h3 style={{ color: '#1890ff' }}>Total amount: {amount} PC</h3>
            <h3 style={{ color: '#1890ff' }}>Total price: {price} $</h3>
        </div>
    );
}

Cart.propTypes = {
    order: propTypes.array.isRequired,
};

const mapStateToProps = store => ({
    order: orderCartSelector(store),
});

export default connect(mapStateToProps)(Cart);