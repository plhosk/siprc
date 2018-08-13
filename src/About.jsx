import React from 'react'

const About = () => (
  <main>
    <section>
      {/* <Element name="section-about"> */}
      <div>
        <div className="App-section-header-container">
          <img className="App-section-header-img" height="61" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-section-header">
            About
          </div>
          <img className="App-section-header-img" height="61" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
        <h3>
          Funding Requests
        </h3>
        <p>
          For funding requests, download the&nbsp;
          <a href="docs/SIPRC_Application_for_Funding.pdf" target="_blank">
            Application for Funding Form
          </a>
          &nbsp;
          (PDF).
        </p>
        {/* </Element> */}
      </div>
    </section>
  </main>
)

export default About
