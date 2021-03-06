import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App1 from './component1/app1';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/users'>
            <App1/>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
         
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
