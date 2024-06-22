import React from 'react'
import SearchBar from '../components/SearchBar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Services from '../components/Services'
import Feedback from '../components/Feedback'
import Newsletter from '../components/Newsletter'
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SearchBar/>
      <Destination/>
      <Services />
      <Feedback />
      <Newsletter />
    </div>
  )
}

export default HomePage
