import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import { Route, BrowserRouter} from 'react-router-dom'
import  { Provider }  from 'react-redux';
import  {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
	rootReducer, composeWithDevTools(
		applyMiddleware(thunk)
	)
);
ReactDOM.render(
	<Provider store={store}>
		<App/></Provider>,
	document.getElementById('root')
);
