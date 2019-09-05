import React, { useState, useContext } from 'react';
import { Form, Button, Rate, Input, Card, Icon } from 'antd';
import { addReview } from '../action-creators/index';
import { connect } from 'react-redux';
import { context } from '../contexts/language';
import translate from '../locale/translate';

function ReviewFeedbackForm({ restaurantID, addNewReview }) {
    const [feedbackText, setFeedbackText] = useState();
    const [feedbackRating, setFeedbackRating] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();
        addNewReview(feedbackText, feedbackRating, restaurantID);
        setFeedbackText();
        setFeedbackRating(0);
    };

    const handleSetRating = value => setFeedbackRating(value);

    const handleChangeInputValue = event => setFeedbackText(event.target.value);

    const language = useContext(context);

    return (
        <div className="review-feedbackform-container">
            <Card bordered style={{ width: '350px', margin: '0 auto', textAlign: 'center' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item style={{ margin: 0 }}>
                        <Input
                            prefix={<Icon type="edit"></Icon>}
                            style={{ width: '300px' }}
                            placeholder={translate(language, 'your-feedback')}
                            value={feedbackText}
                            onChange={handleChangeInputValue}
                        ></Input>
                    </Form.Item>

                    <Form.Item style={{ margin: 0 }}>
                        <Rate value={feedbackRating} onChange={handleSetRating}></Rate>
                    </Form.Item>

                    <Form.Item style={{ margin: 0 }}>
                        <Button type="primary" htmlType="submit">
                            {translate(language, 'add-review')}
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
