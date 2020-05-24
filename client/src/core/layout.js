import React, { Fragment } from 'react'
import {Link, withRouter} from 'react-router-dom' // page does not reload when clicked on a nav bar link for example
import { isAuth, signout } from "../auth/Helpers";

const Layout = ({children, match, history}) => {

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
        <Link to="/" className="nav-link" style={isActive("/")}>
          Home
        </Link>
      </li>

      {!isAuth() && (
        <Fragment>
          <li className="nav-item">
            <Link to="/signin" className="nav-link" style={isActive("/signin")}>
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link" style={isActive("/signup")}>
              Sign up
            </Link>
          </li>
        </Fragment>
      )}

      {isAuth() && (
        <li className="nav-item">
          <span className="nav-link">{isAuth().name}</span>
        </li>
      )}

      {isAuth() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ curser: "pointer", color: "#fff" }}
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Logout
          </span>
        </li>
      )}

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
