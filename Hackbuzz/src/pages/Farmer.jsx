import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/about'
import Faq from '../components/faq'
import FarmerUpdate from '../components/farmerUpdate'
const Farmer = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <FarmerUpdate/>
        <Faq/>
        <About/>
        <Footer/>
    </>
  )
}

export default Farmer