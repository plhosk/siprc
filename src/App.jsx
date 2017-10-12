import React from 'react'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img className="App-header-img" width="100%" src="bird-rock-cropped.jpg" alt="bird on rock" />
      <div className="App-header-title">
        <div className="App-logo-text">SIPRC</div>
        <h1 className="App-title">Saturna Island Parks and Recreation Commission</h1>
      </div>
    </header>
    <main>
      <nav className="App-nav">
        <div className="App-nav-item">Parks</div>
        <div className="App-nav-divider">-</div>
        <div className="App-nav-item">Trails</div>
        <div className="App-nav-divider">-</div>
        <div className="App-nav-item">Events</div>
        <div className="App-nav-divider">-</div>
        <div className="App-nav-item">Contact</div>
        <div className="App-nav-divider">-</div>
        <div className="App-nav-item">About</div>
      </nav>
      <div className="App-intro-div">
        <p className="App-intro">
          Welcome to the website of the Saturna Island Parks and Recreation Commission.
        </p>
        <p className="App-intro">
          This website is under construction. Thank you for your patience.
        </p>
      </div>
      <section>
        <h2>Contact</h2>
        <p>Email us at: <a href="mailto:parksrec@saturnanet.net">parksrec@saturnanet.net</a></p>
      </section>
    </main>
  </div>
)

export default App
