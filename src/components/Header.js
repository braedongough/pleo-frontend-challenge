import React from "react";
import { connect } from "react-redux";

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className="header__title">
                    <h1>Expense List</h1>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(
    undefined,
    mapDispatchToProps
)(Header);
