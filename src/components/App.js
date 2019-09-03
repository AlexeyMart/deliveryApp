import React from 'react';
import '../index.css';
import 'antd/dist/antd.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import MainPage from './routes/MainPage';
import OrderPage from './routes/OrderPage';

export default function App() {
    return (
        <>
            <h1 className="app-title">
                <NavLink to="">Delivery App</NavLink>
            </h1>
            <Switch>
                <Route path="/order/" component={OrderPage}></Route>
                <Route path="" component={MainPage}></Route>
            </Switch>
        </>
    );
}
