import React from 'react';
import Promise from 'bluebird';
import {Provider} from 'react-redux'
import MainComponent from './components/MainComponent.jsx'

class Application {
    constructor(dal, store) {
        this.dal = dal;
        this.store = store;
    }

    renderHtml() {
        const store = this.store;
        const title = store.getState().title;

        return <html>
            <head>
                <title>{title}</title>
            </head>
            <body>
                <Provider store={store}>
                    <MainComponent />
                </Provider>
            </body>
        </html>;
    }
}

module.exports = Application;
