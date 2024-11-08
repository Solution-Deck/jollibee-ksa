import React from 'react'
import './storelocations.css'
import { Footer, Navbar } from '../../component'
import * as location from '.'

const Storelocations = () => {
  const renderLocation = (locationArray) => {
    return locationArray.map((location, index) => (
      <img key={index} src={location} alt={`location-${index + 1}`} />
    ));
  };

  return (
    <>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>

    <main className='store-main'>
      <h1>Store Locations</h1>
      <section>
        <h3>RIYADH CITY</h3>
        <div className='location-flex'>
            {renderLocation([
              location.location1,
              location.location2,
              location.location3,
              location.location4,
              location.location5,
            ])}
            </div>
      </section>

      <div className='divider-loc'></div>

      <section>
        <h3>JEDDAH CITY</h3>
        <div className='location-flex'>
            {renderLocation([
              location.location6,
              location.location7,
              location.location8,
            ])}
            </div>
      </section>

      <div className='divider-loc'></div>

      <section>
        <h3>TAIF CITY</h3>
        <div className='location-flex'>
            {renderLocation([
              location.location9,
            ])}
            </div>
      </section>

      <div className='divider-loc'></div>

      <section>
        <h3>YANBU CITY</h3>
        <div className='location-flex'>
            {renderLocation([
              location.location10,
            ])}
            </div>
      </section>

      <div className='divider-loc'></div>

      <section>
        <h3>AL-KHOBAR CITY</h3>
        <div className='location-flex'>
            {renderLocation([
              location.location11,
            ])}
            </div>
      </section>

      <div className='divider-loc'></div>

      <section>
        <h3>AL-JUBAIL CITY</h3>
        <div className='location-flex'>
            {renderLocation([
              location.location12,
            ])}
            </div>
      </section>
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Storelocations