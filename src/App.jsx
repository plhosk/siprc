import React from 'react'
import * as Scroll from 'react-scroll'

import './App.css'

const { Element, scroller } = Scroll

const smoothScrollOpts = { smooth: true, duration: 500 }

const App = () => (
  <div className="App">
    <header className="App-header">
      <img className="App-header-img" width="100%" src="bird-rock.jpg" alt="bird on rock" />
      <div className="App-header-title">
        <div className="App-header-horizontal-bar-top" />
        <div className="App-logo-text">
          <img src="saturna-green.png" height="49" alt="saturna island" />
          SaturnaParks.ca
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
          <div
            role="button"
            tabIndex={0}
            className="App-nav-item"
            onClick={() => { scroller.scrollTo('section-events', smoothScrollOpts) }}
            onKeyDown={() => { scroller.scrollTo('section-events', smoothScrollOpts) }}
          >
            Events
          </div>
          <img className="App-nav-item-img" height="49" src="saturna-blue-right.png" alt="saturna right half" />
        </div>

        <div className="App-nav-item-container">
          <img className="App-nav-item-img" height="49" src="saturna-blue-left.png" alt="saturna left half" />
          <div
            role="button"
            tabIndex={0}
            className="App-nav-item"
            onClick={() => { scroller.scrollTo('section-contact', smoothScrollOpts) }}
            onKeyDown={() => { scroller.scrollTo('section-contact', smoothScrollOpts) }}
          >
            Contact
          </div>
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
        <Element name="section-events">
          <div className="App-section-header-container">
            <img className="App-section-header-img" height="61" src="saturna-blue-left.png" alt="saturna left half" />
            <div className="App-section-header">
              Events
            </div>
            <img className="App-section-header-img" height="61" src="saturna-blue-right.png" alt="saturna right half" />
          </div>

          <div className="App-events-list-container">

            <div className="App-events-year">
              2018
            </div>

            <div className="App-events-list-flex">
              <div className="App-events-date">
                Saturday, May 5th
              </div>
              <div className="App-events-content-flex">
                <div className="App-events-title">
                  Thomson Park Clean-up
                </div>
                <div className="App-events-content">
                  <div className="App-events-content-text">
                    Volunteers remove winter debris, make a pile for the Solstice Bonfire event,
                    and are rewarded with lunch.
                  </div>
                </div>
              </div>
            </div>

            <div className="App-events-list-flex">
              <div className="App-events-date">
                Sunday, June 10th
              </div>
              <div className="App-events-content-flex">
                <div className="App-events-title">
                  Taylor Point Row Paddle Hike
                </div>
                <div className="App-events-content">
                  <div className="App-events-content-text">
                    So many ways to arrive at Taylor point!
                    Share stories of your adventures and enjoy a boxed lunch.
                  </div>
                </div>
              </div>
            </div>

            <div className="App-events-list-flex">
              <div className="App-events-date">
                Saturday, July 14th
              </div>
              <div className="App-events-content-flex">
                <div className="App-events-title">
                  Parks Canada Day
                </div>
                <div className="App-events-content">
                  <div className="App-events-content-text">
                    Family activities at East Point Park including the Intertidal Safari.
                  </div>
                </div>
              </div>
            </div>

            <div className="App-events-list-flex">
              <div className="App-events-date">
                Saturday, September 8th
              </div>
              <div className="App-events-content-flex">
                <div className="App-events-title">
                  Salmon BBQ, Thomson Park
                </div>
                <div className="App-events-content">
                  <div className="App-events-content-text">
                    Celebrate the last lazy days of summer by the beach,
                    listen to the latest news from the Lyall Creek salmon project.
                  </div>
                </div>
              </div>
            </div>

            <div className="App-events-list-flex">
              <div className="App-events-date">
                Friday, December 21st
              </div>
              <div className="App-events-content-flex">
                <div className="App-events-title">
                  Solstice Bonfire party, Thomson Park
                </div>
                <div className="App-events-content">
                  <div className="App-events-content-text">
                    All the debris collected from the winter before is lit up to encourage the sun
                    to come back for another year.
                    Hot drinks and Christmas carols add to the warm glow.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </Element>
      </section>

      <section>
        <Element name="section-contact">
          <div className="App-section-header-container">
            <img className="App-section-header-img" height="61" src="saturna-blue-left.png" alt="saturna left half" />
            <div className="App-section-header">
              Contact
            </div>
            <img className="App-section-header-img" height="61" src="saturna-blue-right.png" alt="saturna right half" />
          </div>
          <p>Email us at: <a href="mailto:parksrec@saturnanet.net">parksrec@saturnanet.net</a></p>
        </Element>
      </section>

    </main>
  </div>
)

export default App
