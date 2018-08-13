import React from 'react'

const Maps = () => (
  <main>
    <section>
      <div>
        <div className="App-section-header-container">
          <img className="App-section-header-img" height="61" src="saturna-blue-left.png" alt="saturna left half" />
          <div className="App-section-header">
            Maps
          </div>
          <img className="App-section-header-img" height="61" src="saturna-blue-right.png" alt="saturna right half" />
        </div>

        <div className="App-maps-list">

          <h3>
            Google Maps
          </h3>
          <ul>
            <li>
              <a
                href="https://www.google.ca/maps/place/Saturna+Island/@48.7883481,-123.1994326,12z"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saturna Island on Google Maps
              </a>
            </li>
          </ul>

          <h3>
            Parks and Attractions
          </h3>
          <ul>
            <li>
              <a
                href="docs/map2017_web.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parks and Attractions Map - 2017 (PDF)
              </a>
            </li>
            <li>
              <a
                href="docs/Saturna-Map-Final-2015.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alternate Parks and Attractions Map - 2015 (JPG)
              </a>
            </li>
          </ul>

          <h3>
            Shorelines
          </h3>
          <ul>
            <li>
              <a
                href="docs/Saturna_Shoreline_Mapping.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saturna&apos;s Shoreline Maps & Info (PDF)
              </a>
            </li>
            <li>
              <a
                href="docs/Sharing_Our_Shorelines.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sharing Our Shorelines (PDF)
              </a>
            </li>
          </ul>

          <h3>
            Bald Eagle Nest Sites
          </h3>
          <ul>
            <li>
              <a
                href="docs/wits-saturna-report-2009.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bald Eagle Nest Sites - 2009 (PDF)
              </a>
            </li>
          </ul>

        </div>

      </div>
    </section>
  </main>
)

export default Maps
