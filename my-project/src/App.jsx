import React from 'react'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Wheretobuy from './components/Wheretobuy/Wheretobuy'
import AppBanner from './components/AppBanner/AppBanner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='  overflow-y-hidden overflow-x-hidden'>
      <Hero/>
      <Services/>
      <Wheretobuy/>
      <AppBanner/>
      <Footer/>
    </div>
  )
}

export default App
