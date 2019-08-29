import React, { useState } from 'react';
import { Button, Avatar, Rate } from 'antd';
import ReviewList from './ReviewList';
import RestaurantMenu from './RestaurantMenu';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { restaurantSelector, restaurantRatingSelector } from '../selectors/index';

function Restaurant({ restaurant, id, rating }) {
    // console.log('restaurant = ', restaurant);
    // console.log(`id = `, id);
    const [isOpen, setOpen] = useState();

    const body = isOpen && (
        <>
            <RestaurantMenu menu={restaurant.menu}></RestaurantMenu>
            <ReviewList restaurantID={id}></ReviewList>
        </>
    );

    return (
        <div className="restaurant-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                    src={restaurant.image}
                    shape="square"
                    size={70}
                    style={{ marginBottom: '5px' }}
                ></Avatar>
                <h2 className="restaurant-title">{restaurant.name}</h2>

                <Rate disabled value={rating} style={{ margin: 'auto 60px auto auto' }}></Rate>

                <Button
                    shape="round"
                    type={isOpen ? 'danger' : 'primary'}
                    onClick={() => setOpen(prevState => !prevState)}
                >
                    {isOpen ? 'Close' : 'Open'}
                </Button>
            </div>

            {body}
        </div>
    );
}

Restaurant.propTypes = {
    restaurant: propTypes.shape({
        menu: propTypes.array,
        image: propTypes.string,
        name: propTypes.string,
    }).isRequired,
};

const mapStateToProps = (store, ownProps) => ({
    restaurant: restaurantSelector(store, ownProps),
    rating: restaurantRatingSelector(store, ownProps),
});

export default connect(mapStateToProps)(Restaurant);
