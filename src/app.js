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

// That is an interesting way of initializing the store and the app,
// Usually the root component (or the component needing the expenses)
// would dispatch that action
// I don't dislike that though... Makes things clear.
// Only problem is that you have to render twice using ReactDOM.render
// Dashboard could trigger `startSetExpenses`, in the state you would have a "fetching: true|false"
// And Dashboard would render Loading when fetchin is true, and Header+ExpenseListFilters+ExpenseList
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Dashboard />
        </Provider>,
        document.getElementById("app")
    );
});
