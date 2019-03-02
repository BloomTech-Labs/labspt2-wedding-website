import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk"
//import logger from 'redux-logger'
//import reducer from "./reducer"


//Middleware for error logging and dispatching
const middleware = applyMiddleware(thunk);
const store = createStore( middleware);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);