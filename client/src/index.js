import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Routers} from 'react-router-dom';
import {rootReducer} from './reducers/index';

const store = createStore( rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <Routers>
    <Main />
    </Routers>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
