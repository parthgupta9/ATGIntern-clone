import React from 'react'
import Navbar from './Navbar'
import Homescreen from './homescreen/Homescreen'
import Card from './Card/Card'
import Testomonial from './Testomonial/Testomonial'

const App = () => {
  return (
  <>
<div>
      <Navbar/>
      <Homescreen/>
      </div>
      <Card/>
      <Testomonial/>
    </>
  )
}

export default App