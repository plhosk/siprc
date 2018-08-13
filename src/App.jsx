import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import BirdRock from './BirdRock'
import Navbar from './Navbar'
import Home from './Home'
import Events from './Events'
import Contact from './Contact'
import About from './About'

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        {/* <img className="App-header-img" width="100%" src="bird-rock.jpg" alt="bird on rock" /> */}
        <div className="App-header-title">
          <div className="App-header-horizontal-bar-top" />
          <div className="App-logo-text">
            <img src="saturna-green.png" height="49" alt="saturna island" />
            SaturnaParks.ca
          </div>
          <h1 className="App-title">
            Saturna Island Parks and Recreation Commission
          </h1>
        </div>
        <BirdRock />
        <Route component={Navbar} />
        <div className="App-header-horizontal-bar-bottom" />
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />

    </div>
  </Router>
)

export default App
