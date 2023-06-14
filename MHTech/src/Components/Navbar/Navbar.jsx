import React, {useState, useContext, createContext} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from '../Home/Home'
import Login from '../Login/Login'
import Checkout from '../Checkout/Checkout'
import "./Navbar.css"
import { Provider } from 'react-redux'
import { store } from '../../store'
import LoginPage from '../../LoginPage'




const Navbar = () => {
  return (
    <div className='navbar'>
    <Provider store={store}>
    <Router>
      <nav>
        <Link to={"/"} className='nav-item'>Home</Link>
        <Link to={"/login"} className='nav-item'>Login</Link>
        <Link to={"/checkout"} className='nav-item'>Checkout</Link>
        <Link to={"/loginpage"}>Login-Page</Link>
      </nav>
      <Routes className={'pages'}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route
          path='/loginpage' element={<LoginPage/>}
        />
      </Routes>
     </Router> 
    </Provider>
    
    <footer>
      Created by Mehedi Hasan
    </footer>
    </div>
  )
}

export default Navbar