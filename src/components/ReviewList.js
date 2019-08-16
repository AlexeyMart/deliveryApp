import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import Review from './Review';
import propTypes from 'prop-types';

export default function ReviewList({ reviews }) {
    const [state, setState] = useState();

    console.log('review = ', reviews);

    const body = state && (
        <Row gutter={8} type="flex" justify="center">
            {reviews.map(review => (
                <Col key={review} span={3}>
                    <Review id={review}></Review>
                </Col>
            ))}
        </Row>
    );

    return (
        <div className="reviews-container">
            <Button type="default" onClick={() => setState(prevState => !prevState)}>
                {state ? 'Close reviews' : 'Open reviews'}
            </Button>
            {body}
        </div>
    );
}

ReviewList.propTypes = {
    reviews: propTypes.array.isRequired,
};
