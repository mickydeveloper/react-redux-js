import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AppComponent extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Wo',
        };
    }

    render() {
        return (
            <div>{this.state.title}</div>
        );
    }
}

const app = document.getElementById("app");
app ? ReactDOM.render(<AppComponent/>, app) : false;