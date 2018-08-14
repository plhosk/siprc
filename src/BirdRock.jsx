import React from 'react'

import birdRockBase64 from './bird-rock'

const BirdRock = () => (
  <div className="App-birdrock">
    <div className="App-header-horizontal-bar" />
    <img className="App-header-img" width="100%" src={birdRockBase64} alt="bird on rock" />
    <div className="App-header-horizontal-bar" />
  </div>
)

export default BirdRock
