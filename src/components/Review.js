import React from 'react';
import { Rate, Card } from 'antd';

export default function Review({ review: { user, text, rating } }) {
    console.log(user, text, rating);

    return (
        <div className="review-container">
            <Card bordered title={user} size="small">
                <p>{text}</p>
                <Rate value={rating} disabled></Rate>
            </Card>
        </div>
    );
}
