import React from 'react';
import { Rate, Card } from 'antd';
import propTypes from 'prop-types';

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

Review.propTypes = {
    review: propTypes.shape({
        user: propTypes.string,
        text: propTypes.string,
        rating: propTypes.number,
    }).isRequired,
};
