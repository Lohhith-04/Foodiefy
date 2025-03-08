import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card1 from './components/Card1'
import Mail from './components/Mail'
import Pricing from './components/Pricing'
import Footer_main from './components/Footer_main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero/>
      <Card1/>
      <Mail/>
      <Pricing/>
      <Footer_main/>
      
      
      
    </>
  )
}

export default App
