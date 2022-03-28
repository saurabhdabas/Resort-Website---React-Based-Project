import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function Error() {
  return (
    <div>
      <Hero>
      <Banner 
          title="OOPS! Page Not Found"
          subtitle="404"
          >
          <Link to="/" className="btn-primary">Return Home</Link>
        </Banner>
      </Hero>
    </div>
  )
}
