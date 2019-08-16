import React from 'react';
import { Rate, Card } from 'antd';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { reviewSelector, userSelector } from '../selectors/index';

function Review({ review: { text, rating }, user }) {
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

const mapStateToProps = (store, ownProps) => ({
    review: reviewSelector(store, ownProps),
    user: userSelector(store, ownProps),
});

export default connect(mapStateToProps)(Review);
