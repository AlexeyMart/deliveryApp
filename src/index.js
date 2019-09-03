import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.querySelector('.root'),
);
