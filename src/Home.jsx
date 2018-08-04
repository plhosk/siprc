import React from 'react'

import birdRockBase64 from './bird-rock'

const Home = () => (
  <div>
    <div>
      <img className="App-header-img" width="100%" src={birdRockBase64} alt="bird on rock" />
      <div className="App-header-horizontal-bar" />
    </div>

    <main>

      <div className="App-intro-div">
        <p className="App-intro">
          Welcome to the website of the Saturna Island Parks and Recreation Commission.
        </p>
        {/* <p className="App-intro">
          Click the blue tabs to continue.
        </p> */}
        {/* <p className="App-intro">
          This website is under construction. Thank you for your patience.
        </p> */}
      </div>

    </main>
  </div>
)

export default Home
