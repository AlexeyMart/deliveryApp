import React from 'react';
import '../index.css';
import 'antd/dist/antd.css';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import MainPage from './routes/MainPage';
import OrderPage from './routes/OrderPage';

export default function App() {
    return (
        <>
            <h1 className="app-title">
                <NavLink to="/main">Delivery App</NavLink>
            </h1>
            <Switch>
                <Redirect from="/" exact to="/main"></Redirect>
                <Route path="/main" component={MainPage}></Route>
                <Route path="/order/" component={OrderPage}></Route>
                <Route path="*" render={() => <h1>Page does not exist</h1>}></Route>
            </Switch>
        </>
    );
}
