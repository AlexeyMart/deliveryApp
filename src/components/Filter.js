import React from 'react';
import { Select } from 'antd';
import propTypes from 'prop-types';

export default function Filter({ handleChangeRating }) {
    return (
        <div className="filter-container">
            <Select
                size="small"
                style={{ width: '100px' }}
                onChange={value => handleChangeRating(value)}
                defaultValue={0}
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
