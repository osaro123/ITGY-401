import React from 'react'
import About from '../components/landing-page/About'
import Header from '../components/landing-page/Header'
import Services from '../components/landing-page/Services'
import HowItWorks from '../components/landing-page/HowItWorks'
import Testimonials from '../components/landing-page/Testimonials'
import Pricing from '../components/landing-page/Pricing'
import CallToAction from '../components/landing-page/CallToAction'
import Footer from '../components/landing-page/Footer'
import Lenis from 'lenis'
import Logo from '../components/landing-page/Logo'
import Faqs from '../components/landing-page/Faqs'

const Home = () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Header/>
      {/* <Logo/> */}
      <About/>
      <Services/>
      {/* <HowItWorks/> */}
      {/* <Testimonials/> */}
      <Pricing/>
      <Faqs/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default Home