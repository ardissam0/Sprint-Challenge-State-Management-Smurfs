import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//imported necessary imports
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Reducer} from './reducers/Reducer';

//create store
const store = createStore(Reducer, applyMiddleware(thunk));

//wrap App in the Provider
ReactDOM.render(
<Provider store = {store}> 
<App /> 
</Provider>, document.getElementById("root"));
