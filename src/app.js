import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Modal from "react-modal";
import Dashboard from "./components/DashboardPage";
import LoadingPage from "./components/LoadingPage";
import store from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

registerPlugin(FilePondPluginImagePreview);

Modal.setAppElement("#app");

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Dashboard />
        </Provider>,
        document.getElementById("app")
    );
});
