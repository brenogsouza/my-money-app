import React from "react";
import ReactDOM from "react-dom";

// REDUX
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

// MIDDLEWARES
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

//CUSTOM COMPONENTS
import App from "./main/app";

//REDUCERS
import reducers from "./main/reducers";

const store = applyMiddleware(promise, multi, thunk)(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
