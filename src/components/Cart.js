import React, { useContext } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { orderCartSelector } from '../selectors/index';
import { context } from '../contexts/language';
import translate from '../locale/translate';

function Cart({ order: [amount, price] }) {
    const language = useContext(context);
    return (
        <div className="cart-container">
            <h3 style={{ color: '#1890ff' }}>
                {translate(language, 'total-amount')}: {amount} {translate(language, 'pc')}
            </h3>
            <h3 style={{ color: '#1890ff' }}>
                {translate(language, 'total-price')}: {price} $
            </h3>
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
