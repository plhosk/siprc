import React from 'react'
import './App.css'

const App = () => (
  <div className="App">
    <nav className="App-nav">
      <div id="nav-first">Parks</div>
      <div>Trails</div>
      <div>Events</div>
      <div>Contact</div>
      <div>About</div>
    </nav>
    <header className="App-header">
      <img className="App-img-bird" width="100%" src="bird-rock.jpg" alt="bird on rock" />
      <div className="App-logo-text">SIPRC</div>
      <h1 className="App-title">Saturna Island<br />Parks and Recreation Commission</h1>
    </header>
    <main>
      <p className="App-intro">
        Welcome to the website of the Saturna Island Parks and Recreation Commission.
      </p>
      <section>
        <h2>Parks</h2>
        <p>Here is some information about parks on Saturna Island.</p>
      </section>
      <section>
        <h2>Trails</h2>
        <p>Here is some information about trails on Saturna Island.</p>
      </section>
    </main>
  </div>
)

export default App
