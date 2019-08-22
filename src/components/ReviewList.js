import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import Review from './Review';
import propTypes from 'prop-types';
import ReviewFeedbackForm from './ReviewFeedbackForm';
import { connect } from 'react-redux';
import { reviewListSelector } from '../selectors';

function ReviewList({ reviews, restaurantID }) {
    const [state, setState] = useState();

    console.log('review = ', reviews);

    const body = state && (
        <>
            <Row gutter={8} type="flex" justify="center">
                {reviews.map(review => (
                    <Col key={review} span={3}>
                        <Review id={review}></Review>
                    </Col>
                ))}
            </Row>
            <ReviewFeedbackForm restaurantID={restaurantID}></ReviewFeedbackForm>
        </>
    );

    return (
        <div className="reviews-container">
            <Button
                style={{ display: 'block', margin: '0 auto' }}
                type={state ? 'danger' : 'primary'}
                onClick={() => setState(prevState => !prevState)}
            >
                {state ? 'Close reviews' : 'Open reviews'}
            </Button>
            {body}
        </div>
    );
}

ReviewList.propTypes = {
    reviews: propTypes.array.isRequired,
};

const mapStateToProps = (store, ownProps) => ({
    reviews: reviewListSelector(store, ownProps),
});

export default connect(mapStateToProps)(ReviewList);
