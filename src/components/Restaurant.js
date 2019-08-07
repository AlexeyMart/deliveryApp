import React, { useState } from 'react';
import { Button } from 'antd';
import ReviewList from './ReviewList';
import RestaurantMenu from './RestaurantMenu';

export default function Restaurant({ restaurant, defaultOpen }) {
    const [isOpen, setOpen] = useState(defaultOpen);

    console.log(restaurant);

    const body = isOpen && (
        <>
            <img src={restaurant.image} width="60px" height="60px" alt=""></img>
            <RestaurantMenu menu={restaurant.menu}></RestaurantMenu>
            <ReviewList reviews={restaurant.reviews}></ReviewList>
        </>
    );

    return (
        <div className="restaurant-container">
            <h2 className="restaurant-title">{restaurant.name}</h2>
            {body}
            <div>
                <Button type="primary" onClick={() => setOpen(prevState => !prevState)}>
                    {isOpen ? 'Close' : 'Open'}
                </Button>
            </div>
        </div>
    );
}
