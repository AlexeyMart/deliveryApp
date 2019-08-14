import React from 'react';
import { connect } from 'react-redux';
import { getDataforCart } from '../utils/index';
import propTypes from 'prop-types';

function Cart({ order: [amount, price] }) {
    return (
        <div className="cart-container">
            <h3 style={{ color: '#1890ff' }}>Total amount: {amount} PC</h3>
            <h3 style={{ color: '#1890ff' }}>Total price: {price} $</h3>
        </div>
    );
}

Cart.propTypes = {
    order: propTypes.array.isRequired
}

const mapStateToProps = store => ({
    order: getDataforCart(store.order),
});

export default connect(mapStateToProps)(Cart);
