import pathModule from 'path';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux'

import Application from '../../../../app/index.jsx';
import appReducer from '../../../../app/reducers/app';

module.exports = function createHandlers(config, dal) {
	const server = express();

	server.get('/:pageUrl', (req, res, next) => {
		dal.page.getPage(req.params.pageUrl).then((homePage) => {
			const store = createStore(appReducer, homePage);
			const app = new Application(dal, store);

			res.send(ReactDOMServer.renderToString(app.renderHtml()));
		});
	});

    server.get('/', (req, res, next) => {
		dal.page.getHome().then((homePage) => {
			const store = createStore(appReducer, homePage);
			const app = new Application(dal, store);

			res.send(ReactDOMServer.renderToString(app.renderHtml()));
		});
	});

	return server;
};
