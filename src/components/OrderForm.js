import React, { useContext } from 'react';
import { Form, Button, Icon, Input } from 'antd';
import useInputValue from '../custom-hooks/useInputValue';
import { connect } from 'react-redux';
import { orderFormSelector } from '../selectors/index';
import propTypes from 'prop-types';
import { context } from '../contexts/language';
import translate from '../locale/translate';

function OrderForm({ orderData }) {
    const [name, setName] = useInputValue();
    const [telephone, setTelephone] = useInputValue();
    const [adress, setAdress] = useInputValue();

    const handleSubmit = event => {
        event.preventDefault();
        console.log('name = ', name, 'telephone = ', telephone, 'adress = ', adress);
        console.log('orderData = ', orderData);
        alert('look at orderData in console!');
    };

    const language = useContext(context);

    return (
        <div className="order-form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Item style={{ margin: 0 }}>
                    <Input
                        placeholder={translate(language, 'name')}
                        prefix={<Icon type="user"></Icon>}
                        value={name}
                        onChange={setName}
                        style={{ width: '300px' }}
                    ></Input>
                </Form.Item>

                <Form.Item style={{ margin: 0 }}>
                    <Input
                        placeholder={translate(language, 'telephone')}
                        prefix={<Icon type="phone"></Icon>}
                        value={telephone}
                        onChange={setTelephone}
                        style={{ width: '300px' }}
                    ></Input>
                </Form.Item>

                <Form.Item style={{ margin: 0 }}>
                    <Input
                        placeholder={translate(language, 'adress')}
                        prefix={<Icon type="home"></Icon>}
                        value={adress}
                        onChange={setAdress}
                        style={{ width: '300px' }}
                    ></Input>
                </Form.Item>

                <Form.Item style={{ margin: 0 }}>
                    <Button type="danger" htmlType="submit">
                        {translate(language, 'order')}
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
