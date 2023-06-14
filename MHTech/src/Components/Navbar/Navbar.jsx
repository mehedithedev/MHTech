import React, {useState, useContext, createContext} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from '../Home/Home'
import Login from '../Login/Login'
import Checkout from '../Checkout/Checkout'
import "./Navbar.css"

export const NavBarContext= createContext()

const Navbar = () => {
  return (
    <div className='navbar'>
     <Router>
      <nav>
        <Link to={"/"} className='nav-item'>Home</Link>
        <Link to={"/login"} className='nav-item'>Login</Link>
        <Link to={"/checkout"} className='nav-item'>Checkout</Link>
      </nav>
      <Routes className={'pages'}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
     </Router> 
    <footer>
      Created by Mehedi Hasan
    </footer>
    </div>
  )
}

export default Navbar