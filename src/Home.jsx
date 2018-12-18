import React from 'react'

const Home = () => (
  <section>

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

    <h3>2018 SIPRC Community Survey</h3>

    The results of the 2018 SIPRC Community Survey are in.
    <br />
    <br />
    View the presentation here: &nbsp;
    <a href="/docs/siprc-community-survey-2018.pdf" target="_blank">
      PDF format (.pdf)
    </a>
    &nbsp;&nbsp;
    <a href="/docs/siprc-community-survey-2018.pptx" target="_blank">
      PowerPoint format (.pptx)
    </a>

  </section>
)

export default Home
