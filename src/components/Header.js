import React from "react";

// Here i would suggest to read up on the CSS Modules with React, 
// it's a much cleaner way to import your css and prevent any naming collisions
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
// https://github.com/css-modules/css-modules
export default () => (
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
