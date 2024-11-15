import React from 'react'
import Navbar from './Components/Navbar'
import Page from './Components/page'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Teams from './Components/Teams'
import ContactPage from './Components/ContactPage'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Page/>
      <AboutUs/>
      <Services/>
      <Teams/>
    </div>
  )
}

export default App
