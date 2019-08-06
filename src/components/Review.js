import React from 'react';
import { Rate } from 'antd';

export default function Review({ review: { user, text, rating } }) {
    console.log(user, text, rating);

    return (
        <div style={{ margin: '10px 0' }}>
            <p>User: {user}</p>
            <p>Text: {text}</p>
            <span>Rating: </span>
            <Rate defaultValue={rating} disabled></Rate>
        </div>
    );
}
