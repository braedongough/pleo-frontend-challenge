import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Dashboard from "./components/DashboardPage";
import store from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById("app")
);
