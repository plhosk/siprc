import React from 'react'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img className="App-header-img" width="100%" src="bird-rock.jpg" alt="bird on rock" />
      <div className="App-header-title">
        <div className="App-header-horizontal-bar" />
        <div className="App-logo-text">
          <img src="saturna-green.png" height="49" alt="saturna island" />
          SIPRC
        </div>
        <h1 className="App-title">
          Saturna Island Parks and Recreation Commission
        </h1>
        <div className="App-header-horizontal-bar" />
      </div>
    </header>
    <main>

      <div className="App-nav-bookend">
        <img height="49" src="saturna-blue-left.png" alt="saturna left half" />
      </div>
      <nav className="App-nav">
        <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-nav-item">Parks</div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
        <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-nav-item">Trails</div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
        <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-nav-item">Events</div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
        <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-nav-item">Contact</div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
        <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-nav-item">About</div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
      </nav>
      <div className="App-nav-bookend">
        <img height="49" src="saturna-blue-right.png" alt="saturna right half" />
      </div>

      <div className="App-intro-div">
        <p className="App-intro">
          Welcome to the website of the Saturna Island Parks and Recreation Commission.
        </p>
        <p className="App-intro">
          This website is under construction. Thank you for your patience.
        </p>
      </div>
      <section>
        <div className="App-section-header-container">
          <img className="App-section-header-img" height="61" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-section-header">Contact</div>
          <img className="App-section-header-img" height="61" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
        <p>Email us at: <a href="mailto:parksrec@saturnanet.net">parksrec@saturnanet.net</a></p>
      </section>
    </main>
  </div>
)

export default App
