import React, { useState } from 'react';
import { Button, Avatar, Rate } from 'antd';
import ReviewList from './ReviewList';
import RestaurantMenu from './RestaurantMenu';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { restaurantSelector, restaurantRatingSelector } from '../selectors/index';

function Restaurant({ restaurant, id, rating }) {
    console.log('restaurant = ', restaurant);
    console.log(`id = `, id);
    const [isOpen, setOpen] = useState();

    const body = isOpen && (
        <>
            <Rate disabled value={rating} style={{ color: '#1890ff', display: 'block' }}></Rate>
            <RestaurantMenu menu={restaurant.menu}></RestaurantMenu>
            <ReviewList restaurantID={id}></ReviewList>
        </>
    );

    return (
        <div className="restaurant-container">
            <Avatar
                src={restaurant.image}
                shape="square"
                size={100}
                style={{ marginBottom: '5px' }}
            ></Avatar>
            <h2 className="restaurant-title">{restaurant.name}</h2>
            {body}
            <Button
                style={{ display: 'block' }}
                shape="round"
                type={isOpen ? 'danger' : 'primary'}
                onClick={() => setOpen(prevState => !prevState)}
            >
                {isOpen ? 'Close' : 'Open'}
            </Button>
        </div>
    );
}

Restaurant.propTypes = {
    restaurant: propTypes.shape({
        menu: propTypes.array,
        reviews: propTypes.array,
        image: propTypes.string,
        name: propTypes.string,
    }).isRequired,
};

const mapStateToProps = (store, ownProps) => ({
    restaurant: restaurantSelector(store, ownProps),
    rating: restaurantRatingSelector(store, ownProps),
});

export default connect(mapStateToProps)(Restaurant);
