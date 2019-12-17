import React from 'react';
import { AppComponent } from './app.jsx';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.jsx';

const App = () => (
    <Provider store={store}>
        <AppComponent/>
    </Provider>
);

const app = document.getElementById("app");
app ? ReactDOM.render(<App/>, app) : false;