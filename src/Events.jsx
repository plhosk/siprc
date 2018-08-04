import React from 'react'

const Events = () => (
  <main>
    <section>
      {/* <Element name="section-events"> */}
      <div>
        <div className="App-section-header-container">
          <img className="App-section-header-img" height="61" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-section-header">
            Events
          </div>
          <img className="App-section-header-img" height="61" src="saturna-blue-right.png" alt="saturna right half" />
        </div>

        <div className="App-events-list-container">

          <div className="App-events-list-flex">
            <div className="App-events-date">
              Saturday, May 5th, 2018
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
              Sunday, June 10th, 2018
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
              Saturday, July 21st, 2018
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
              Saturday, September 8th, 2018
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
              Friday, December 21st, 2018
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

        {/* </Element> */}
      </div>
    </section>
  </main>
)

export default Events
