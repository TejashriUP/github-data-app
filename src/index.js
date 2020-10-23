import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App1 from './component1/app1';
import reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-pu8wyk-g.us.auth0.com'
      clientId='GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
        <App1/>
    
  </Provider>
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

