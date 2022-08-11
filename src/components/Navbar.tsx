import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
import './Navbar.css'
import Logo from '../images/spenditure.png';
import User from '../images/michael.png'

const Navbar = () => {
    return (
        <nav id='navbar' className="navbar">
            <img src={Logo} alt="edit" id="main-logo" height="50px"/>
            <div id='el'>
              <button className="navbar">Overview</button>     
              <button className="navbar">Transactions</button>     
              <button className="navbar">Budgets</button>     
              <div id="account" className="navbar">
                <a href="url" id="username">{}</a>
                <img src={User} alt="edit" id="user-photo" height="73px"/>
              </div> 
            </div>
        </nav>
    )
}

export default Navbar;