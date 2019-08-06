import React, { useState } from 'react';
import { Button } from 'antd';
import Review from './Review';

export default function ReviewList({ reviews }) {
    const [state, setState] = useState();

    console.log(reviews);

    const body = state && reviews.map(review => <Review review={review} key={review.id}></Review>);

    return (
        <div>
            <Button
                type="danger"
                onClick={() => setState(prevState => !prevState)}
                style={{ margin: '10px 0' }}
            >
                {state ? 'Close reviews' : 'Open reviews'}
            </Button>
            {body}
        </div>
    );
}
