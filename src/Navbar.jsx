/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react'
import PropTypes from 'prop-types'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'

const { scroller } = Scroll
const smoothScrollOpts = {
  smooth: true, duration: 500, offset: -60, // delay: 100, isDynamic: true,
}

const Navbar = ({ location }) => {
  const { pathname } = location
  return (
    <div className="App-nav-container">
      <div className="App-nav-bookend">
        <img height="49" src="saturna-blue-left.png" alt="saturna left half" />
      </div>

      <nav className="App-nav">

        <Link to="/">
          <div className="App-nav-item-container">
            <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
            <div
              role="button"
              tabIndex={0}
              className={`App-nav-item${pathname === '/' ? ' App-nav-item-selected' : ''}`}
              onClick={() => { scroller.scrollTo('navBarElement', smoothScrollOpts) }}
            >
              Home
            </div>
            <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
          </div>
        </Link>

        {/* <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div className={`App-nav-item${pathname === '/parks' ? ' App-nav-item-selected' : ''}`}>
            Parks
          </div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div> */}

        {/* <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-nav-item">
            Trails
          </div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div> */}

        <Link to="/events">
          <div className="App-nav-item-container">
            <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
            <div
              role="button"
              tabIndex={0}
              className={`App-nav-item${pathname === '/events' ? ' App-nav-item-selected' : ''}`}
              onClick={() => { scroller.scrollTo('navBarElement', smoothScrollOpts) }}
            >
              Events
            </div>
            <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
          </div>
        </Link>

        <Link to="/maps">
          <div className="App-nav-item-container">
            <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
            <div
              role="button"
              tabIndex={0}
              className={`App-nav-item${pathname === '/maps' ? ' App-nav-item-selected' : ''}`}
              onClick={() => { scroller.scrollTo('navBarElement', smoothScrollOpts) }}
            >
              Maps
            </div>
            <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
          </div>
        </Link>

        <Link to="/trails">
          <div className="App-nav-item-container">
            <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
            <div
              role="button"
              tabIndex={0}
              className={`App-nav-item${pathname === '/trails' ? ' App-nav-item-selected' : ''}`}
              onClick={() => { scroller.scrollTo('navBarElement', smoothScrollOpts) }}
            >
              Trails
            </div>
            <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
          </div>
        </Link>

        <Link to="/contact">
          <div className="App-nav-item-container">
            <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
            <div
              role="button"
              tabIndex={0}
              className={`App-nav-item${pathname === '/contact' ? ' App-nav-item-selected' : ''}`}
              onClick={() => { scroller.scrollTo('navBarElement', smoothScrollOpts) }}
            >
              Contact
            </div>
            <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
          </div>
        </Link>

        <Link to="/about">
          <div className="App-nav-item-container">
            <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
            <div
              role="button"
              tabIndex={0}
              className={`App-nav-item${pathname === '/about' ? ' App-nav-item-selected' : ''}`}
              onClick={() => { scroller.scrollTo('navBarElement', smoothScrollOpts) }}
            >
              About
            </div>
            <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
          </div>
        </Link>
      </nav>

      <div className="App-nav-bookend">
        <img height="49" src="saturna-blue-right.png" alt="saturna right half" />
      </div>

      <Scroll.Element name="navBarElement">

        <div className="App-nav-site-logo">
          <div className="App-logo-text">
            {/* <img src="saturna-green.png" height="49" alt="saturna island" /> */}
            SaturnaParks.ca
          </div>
        </div>

      </Scroll.Element>
    </div>
  )
}

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

export default Navbar
