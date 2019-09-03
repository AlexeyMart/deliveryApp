import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { orderSelector } from '../selectors/index';
import { columnsToOrderTable as columns } from '../constants/index';
import { orderToDataSource } from '../utils/index';

function Order({ order }) {
    return (
        <div className="order-table-container">
            <Table dataSource={orderToDataSource(order)} columns={columns}></Table>
        </div>
    );
}

const mapStateToProps = store => ({
    order: orderSelector(store),
});

export default connect(mapStateToProps)(Order);
