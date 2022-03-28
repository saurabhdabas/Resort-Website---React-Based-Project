import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
export default function Home() {
  return (
    <Hero >
      <Banner 
        title="Luxurious Rooms"
        subtitle="Deluxe rooms starting at $ 499"
        >
          <Link to="/rooms" className="btn-primary">Our Rooms</Link>
      </Banner>
    </Hero>
  )
}


