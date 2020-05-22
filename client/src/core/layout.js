import React, { Fragment } from 'react'
import {Link} from 'react-router-dom' // page does not reload when clicked on a nav bar link for example

const Layout = ({children}) => {
  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link to="/" className="text-light nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="text-light nav-link">
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

export default Layout
