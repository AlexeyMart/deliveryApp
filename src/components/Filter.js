import React from 'react';
import { Select } from 'antd';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNewRating } from '../action-creators/index';

function Filter({ rating, setRating }) {
    return (
        <div className="filter-container">
            <Select
                size="small"
                style={{ width: '100px' }}
                onChange={value => setRating(value)}
                defaultValue={rating}
            >
                <Select.Option value={0}>All</Select.Option>
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
    handleChangeRating: propTypes.func,
};

const mapStateToProps = store => ({
    rating: store.rating,
});

const mapDispatchToProps = {
    setRating: setNewRating,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter);
