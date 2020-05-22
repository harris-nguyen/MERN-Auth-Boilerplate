import React, { Fragment } from 'react'
import {Link, withRouter} from 'react-router-dom' // page does not reload when clicked on a nav bar link for example

const Layout = ({children, match}) => {

  const isActive = path => {
    if(match.path === path){
      return {color: '#000'}
    } else {
      return {color: '#fff'}
    }
  }

  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link to="/" className="nav-link" style={isActive('/')}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signin" className="nav-link" style={isActive('/signin')}>
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="nav-link" style={isActive('/signup')}>
          Sign up
        </Link>
      </li>
    </ul>
  );

  return(
    <Fragment>
      {nav()}
      <div className='container'>
          {children}
      </div>
    </Fragment>
  )
}

export default withRouter(Layout)
