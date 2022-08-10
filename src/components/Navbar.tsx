import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div id='el'>
              <button>Overview</button>     
              <div id="account">
                {`Username`}
              </div>       
            </div>
        </nav>
    )
}

export default Navbar;