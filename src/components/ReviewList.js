import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import Review from './Review';

export default function ReviewList({ reviews }) {
    const [state, setState] = useState();

    console.log(reviews);

    const body = state && (
        <Row gutter={8} type="flex" justify="center">
            {reviews.map(review => (
                <Col key={review.id} span={3}>
                    <Review review={review}></Review>
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
