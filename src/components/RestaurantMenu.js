import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'antd';
import Dish from './Dish';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadRestaurantMenu } from '../action-creators/index';
import { loadingRestaurantMenu, loadedRestaurantMenu } from '../selectors/index';
import Loader from './Loader';

function RestaurantMenu({ menu, restaurantID, loadRestaurantMenu, loading, loaded }) {
    const [state, setState] = useState(false);

    useEffect(() => {
        if (!loaded) {
            loadRestaurantMenu(restaurantID);
        }
        setState(prevState => !prevState);
    }, []);

    // console.log(`-----loading = `, loading);

    // console.log(`-----loaded = `, loaded);

    // console.log('restaurantID = ', restaurantID);

    // console.log('menu = ', menu);

    const body = loading ? (
        <Loader></Loader>
    ) : (
        state && (
            <Row gutter={16} justify="center" type="flex">
                {menu.map(dish => (
                    <Col span={3} key={dish}>
                        <Dish restaurantID={restaurantID} id={dish}></Dish>
                    </Col>
                ))}
            </Row>
        )
    );

    return (
        <div className="restaurant-menu-container">
            <Button
                style={{ display: 'block', margin: '0 auto' }}
                type={state ? 'danger' : 'primary'}
                onClick={() => setState(prevState => !prevState)}
            >
                {state ? 'Close menu' : 'Open menu'}
            </Button>
            {body}
        </div>
    );
}

RestaurantMenu.propTypes = {
    menu: propTypes.array.isRequired,
};

const mapStateToProps = (store, ownProps) => ({
    loading: loadingRestaurantMenu(store, ownProps),
    loaded: loadedRestaurantMenu(store, ownProps),
});

const mapDispatchToProps = {
    loadRestaurantMenu,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RestaurantMenu);
