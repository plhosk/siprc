import React from 'react'

const Contact = () => (
  <main>
    <section>
      {/* <Element name="section-contact"> */}
      <div>
        <div className="App-section-header-container">
          <img className="App-section-header-img" height="61" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-section-header">
            Contact
          </div>
          <img className="App-section-header-img" height="61" src="saturna-blue-right.png" alt="saturna right half" />
        </div>
        <p>
          Email us at:&nbsp;
          <a href="mailto:parksrec@saturnanet.net">
            parksrec@saturnanet.net
          </a>
        </p>
        {/* </Element> */}
      </div>
    </section>
  </main>
)

export default Contact