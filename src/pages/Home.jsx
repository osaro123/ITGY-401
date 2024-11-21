import React from 'react'
import About from '../components/landing-page/About'
import Header from '../components/landing-page/Header'
import Services from '../components/landing-page/Services'
import HowItWorks from '../components/landing-page/HowItWorks'
import Testimonials from '../components/landing-page/Testimonials'
import Pricing from '../components/landing-page/Pricing'
import CallToAction from '../components/landing-page/CallToAction'
import Footer from '../components/landing-page/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      {/* <HowItWorks/> */}
      {/* <Testimonials/> */}
      <Pricing/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default Home