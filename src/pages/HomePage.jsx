import React from 'react'
import SearchBar from '../components/SearchBar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Services from '../components/Services'
import Feedback from '../components/Feedback'
import FAQ from '../components/FAQ'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SearchBar/>
      <Destination/>
      <Services />
      <Feedback />
      <FAQ />
    </div>
  )
}

export default HomePage
