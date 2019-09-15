import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { createStore, compose, applyMiddleware } from "redux"
import { offline } from "@redux-offline/redux-offline"
import offlineConfig from "@redux-offline/redux-offline/lib/defaults"
import thunk from "redux-thunk"

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./redux/reducers"

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )

// await fetch of persisted store before render
offlineConfig.persistCallback = render;

// configure redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk), offline(offlineConfig))
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
