import React, { useState } from 'react';
import { Button, Avatar, Rate } from 'antd';
import ReviewList from './ReviewList';
import RestaurantMenu from './RestaurantMenu';
import { getAverageRestaurantRating } from '../utils/index';
import propTypes from 'prop-types';

export default function Restaurant({ restaurant }) {
    const [isOpen, setOpen] = useState();

    const body = isOpen && (
        <>
            <Rate
                disabled
                value={getAverageRestaurantRating(restaurant)}
                style={{ color: '#1890ff', display: 'block' }}
            ></Rate>
            <RestaurantMenu menu={restaurant.menu}></RestaurantMenu>
            <ReviewList reviews={restaurant.reviews}></ReviewList>
        </>
    );

    return (
        <div className="restaurant-container">
            <Avatar
                src={restaurant.image}
                shape="square"
                size={80}
                style={{ marginBottom: '5px' }}
            ></Avatar>
            <h2 className="restaurant-title">{restaurant.name}</h2>
            {body}
            <Button
                style={{ display: 'block' }}
                shape="round"
                type="primary"
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
