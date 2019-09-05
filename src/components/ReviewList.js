import React, { useState, useEffect, useContext } from 'react';
import { Button, Row, Col } from 'antd';
import Review from './Review';
import propTypes from 'prop-types';
import ReviewFeedbackForm from './ReviewFeedbackForm';
import { connect } from 'react-redux';
import { reviewListSelector, loadedUsers } from '../selectors';
import { loadAllUsers } from '../action-creators/index';
import { context } from '../contexts/language';
import translate from '../locale/translate';

function ReviewList({ reviews, restaurantID, loadAllUsers, loaded }) {
    useEffect(() => {
        if (!loaded) {
            loadAllUsers();
        }
    }, []);

    const [state, setState] = useState();

    const language = useContext(context);

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
                {state
                    ? translate(language, 'close-reviews-btn')
                    : translate(language, 'open-reviews-btn')}
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
    loaded: loadedUsers(store),
});

const mapDispatchToProps = {
    loadAllUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ReviewList);
