import React, {useState, useContext, createContext} from 'react'
import "./App.css"

import Navbar from './Components/Navbar/Navbar'
import CustomHooks from './Components/CustomHooks/CustomHooks'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <CustomHooks/>
    </div>
  )
}

export default App