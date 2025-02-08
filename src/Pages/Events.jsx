import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventListCards from '../components/EventListCards'

const Events = () => {
  return (
    <div>
        <Navbar/>
        <EventListCards  />

        <Footer/>
    </div>
  )
}

export default Events