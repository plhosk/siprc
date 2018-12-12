import React from 'react'
import { Link } from 'react-router-dom'

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
        For funding requests, fill out our&nbsp;
        <Link to="/funding-application">
          Online Application for Funding Form
        </Link>
        .
        <br />
      </p>

      <div className="App-ordered-list">
        <ol>
          <li>A PDF file will be created when you submit the form</li>
          <li>Save the PDF to your device</li>
          <li>
            Email the PDF as an attachment to&nbsp;
            <a href="mailto:parksrec@saturnanet.net" target="_blank" rel="noopener noreferrer">
          parksrec@saturnanet.net
            </a>
          </li>
        </ol>
      </div>

      <p>
        Alternatively, you may also download a&nbsp;
        <a href="docs/SIPRC_Application_for_Funding.pdf" target="_blank">
          blank form in PDF format
        </a>
        &nbsp;and fill it out by hand.
      </p>
    </div>
  </section>
)

export default About
