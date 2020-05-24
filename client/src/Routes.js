import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import Private from './core/Private'
import PrivateRoute from './auth/PrivateRoute'


const Routes = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <PrivateRoute path="/private" exact component={Private} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes
