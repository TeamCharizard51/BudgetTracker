import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar' className="navbar">
            <div id='el'>
              <button className="navbar">Overview</button>     
              <button className="navbar">Transactions</button>     
              <button className="navbar">Budgets</button>     
              <div id="account" className="navbar">
                <a href="url" id="username">{`Username`}</a>
              </div> 
            </div>
        </nav>
    )
}

export default Navbar;