import React from 'react';
import { Spin, Icon } from 'antd';

export default function Loader() {
    return (
        <div className="loader-container">
            <Spin
                tip="Loading"
                indicator={<Icon style={{ fontSize: '60px' }} type="loading"></Icon>}
            ></Spin>
        </div>
    );
}
