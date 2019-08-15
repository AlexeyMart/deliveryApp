import React from 'react';
import { Form, Button, Icon, Input } from 'antd';
import useInputValue from '../custom-hooks/useInputValue';
import { connect } from 'react-redux';
import { orderFormSelector } from '../selectors/index';
import propTypes from 'prop-types';

function OrderForm({ orderData }) {
    const [name, setName] = useInputValue();
    const [telephone, setTelephone] = useInputValue();
    const [adress, setAdress] = useInputValue();

    const handleSubmit = event => {
        event.preventDefault();
        console.log('name = ', name, 'telephone = ', telephone, 'adress = ', adress);
        console.log('orderData = ', orderData);
    };

    return (
        <div className="order-form-container">
            <h3>Order</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Item style={{ margin: 0 }}>
                    <Input
                        placeholder="Name"
                        prefix={<Icon type="user"></Icon>}
                        value={name}
                        onChange={setName}
                        style={{ width: '300px' }}
                    ></Input>
                </Form.Item>

                <Form.Item style={{ margin: 0 }}>
                    <Input
                        placeholder="Telephone"
                        prefix={<Icon type="phone"></Icon>}
                        value={telephone}
                        onChange={setTelephone}
                        style={{ width: '300px' }}
                    ></Input>
                </Form.Item>

                <Form.Item style={{ margin: 0 }}>
                    <Input
                        placeholder="Adress"
                        prefix={<Icon type="home"></Icon>}
                        value={adress}
                        onChange={setAdress}
                        style={{ width: '300px' }}
                    ></Input>
                </Form.Item>

                <Form.Item style={{ margin: 0 }}>
                    <Button type="danger" htmlType="submit">
                        Order
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

OrderForm.propTypes = {
    orderData: propTypes.object,
};

const mapStateToProps = store => ({
    orderData: orderFormSelector(store),
});

export default connect(mapStateToProps)(OrderForm);
