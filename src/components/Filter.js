import React, { useContext } from 'react';
import { Select } from 'antd';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNewRating } from '../action-creators/index';
import { ratingSelector } from '../selectors/index';
import { context } from '../contexts/language';
import translate from '../locale/translate';

function Filter({ rating, setRating }) {
    const language = useContext(context);
    return (
        <div className="filter-container">
            <Select
                size="small"
                style={{ width: '100px' }}
                onChange={value => setRating(value)}
                value={rating}
            >
                <Select.Option value={0}>{translate(language, 'all')}</Select.Option>
                <Select.Option value={1}>✩</Select.Option>
                <Select.Option value={2}>✩✩</Select.Option>
                <Select.Option value={3}>✩✩✩</Select.Option>
                <Select.Option value={4}>✩✩✩✩</Select.Option>
                <Select.Option value={5}>✩✩✩✩✩</Select.Option>
            </Select>
        </div>
    );
}

Filter.propTypes = {
    rating: propTypes.number,
    setRating: propTypes.func,
};

const mapStateToProps = store => ({
    rating: ratingSelector(store),
});

const mapDispatchToProps = {
    setRating: setNewRating,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter);
