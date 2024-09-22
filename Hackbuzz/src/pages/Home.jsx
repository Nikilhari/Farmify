import React from 'react'
import Header from '../components/userHeader'
import Products from '../components/product'
import Hero from '../components/Hero'
import Faq from '../components/faq'
import About from '../components/about'
import Footer from '../components/footer'
import Prediction from '../components/Prediction'
const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    {/* <Products/> */}
    <Prediction/>
    {/* <Faq/> */}
    {/* <About/> */}
    <Footer/>
    </>
  )
}

export default Home;