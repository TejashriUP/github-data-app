import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App1 from './component1/app1';
import reducers from './reducers';
import thunk from 'redux-thunk'



const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App1/>
  </Provider>
  , 
  document.getElementById('root')
 );

