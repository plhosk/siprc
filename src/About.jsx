import React from 'react'
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'

const { scroller } = Scroll
const smoothScrollOpts = {
  smooth: true, duration: 500, offset: -60,
}

const About = () => (
  <section>
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
        For funding requests, fill out and submit our&nbsp;
        <Link
          to="/form-funding-application.html"
          onClick={() => { scroller.scrollTo('navBarElement', smoothScrollOpts) }}
        >
          Online Application for Funding Form.
        </Link>
      </p>

      <p>
        You may also download the&nbsp;
        <a href="docs/SIPRC_Application_for_Funding.pdf" target="_blank">
          form in PDF format.
        </a>
      </p>
    </div>
  </section>
)

export default About
