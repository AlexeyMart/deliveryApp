import React, { useState } from 'react';
import { Button } from 'antd';
import ReviewList from './ReviewList';

export default function Restaurant({ restaurant, defaultOpen }) {
    const [isOpen, setOpen] = useState(defaultOpen);

    console.log(restaurant);

    const body = isOpen && (
        <>
            <img src={restaurant.image} width="100px" height="100px" alt=""></img>
            <ReviewList reviews={restaurant.reviews}></ReviewList>
        </>
    );

    return (
        <div style={{ marginTop: '20px' }}>
            <h3>{restaurant.name}</h3>
            {body}
            <div>
                <Button type="primary" onClick={() => setOpen(prevState => !prevState)}>
                    {isOpen ? 'Close' : 'Open'}
                </Button>
            </div>
        </div>
    );
}
