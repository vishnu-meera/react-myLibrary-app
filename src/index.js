import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './components/app';
import reducers from '../src/reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    ,document.getElementById("root"));