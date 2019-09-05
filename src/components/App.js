import React, { useState } from 'react';
import '../index.css';
import 'antd/dist/antd.css';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import MainPage from './routes/MainPage';
import OrderPage from './routes/OrderPage';
import { Radio } from 'antd';
import { Provider } from '../contexts/language';
import translate from '../locale/translate';

export default function App() {
    const [language, setLanguage] = useState('EN');
    return (
        <>
            <h1 className="app-title">
                <NavLink to="/main">{translate(language, 'title-delivery-app')}</NavLink>
            </h1>

            <Radio.Group
                onChange={event => setLanguage(event.target.value)}
                value={language}
                style={{ position: 'absolute', left: '60px', top: '5px' }}
            >
                <Radio.Button value="EN">EN</Radio.Button>
                <Radio.Button value="RU">RU</Radio.Button>
            </Radio.Group>

            <Provider value={language}>
                <Switch>
                    <Redirect from="/" exact to="/main"></Redirect>
                    <Route path="/main" component={MainPage}></Route>
                    <Route path="/order/" component={OrderPage}></Route>
                    <Route path="*" render={() => <h1>Page does not exist</h1>}></Route>
                </Switch>
            </Provider>
        </>
    );
}
