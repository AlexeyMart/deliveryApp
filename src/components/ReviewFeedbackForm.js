import React, { useState } from 'react';
import { Form, Button, Rate, Input, Card, Icon } from 'antd';
import useInputValue from '../custom-hooks/useInputValue';
import { addReview } from '../action-creators/index';
import { connect } from 'react-redux';

function ReviewFeedbackForm({ restaurantID, addNewReview }) {
    const [feedbackText, setFeedbackText] = useInputValue();
    const [feedbackRating, setFeedbackRating] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();
        addNewReview(feedbackText, feedbackRating, restaurantID);
    };

    const handleSetRating = value => setFeedbackRating(value);

    return (
        <div className="review-feedbackform-container">
            <Card bordered style={{ width: '350px', margin: '0 auto', textAlign: 'center' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item style={{ margin: 0 }}>
                        <Input
                            prefix={<Icon type="edit"></Icon>}
                            style={{ width: '300px' }}
                            placeholder="your feedback"
                            value={feedbackText}
                            onChange={setFeedbackText}
                        ></Input>
                    </Form.Item>

                    <Form.Item style={{ margin: 0 }}>
                        <Rate value={feedbackRating} onChange={handleSetRating}></Rate>
                    </Form.Item>

                    <Form.Item style={{ margin: 0 }}>
                        <Button type="primary" htmlType="submit">
                            Add a review
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

const mapDispatchToProps = {
    addNewReview: addReview,
};

export default connect(
    null,
    mapDispatchToProps,
)(ReviewFeedbackForm);
