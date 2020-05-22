import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Signup from './auth/Signup'


const Routes = () => {
  return (
    <div className='container'>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default Routes
