import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Images/Search.png';
import Logo from './Images/Icon.png';
import NavMini from './NavMini'
import './NavBar.css';



function Navbar(){
    return (
        <div>
        <div id="Navigation">
            <div id="NavLogo">
                <Link to='/'><img id="CodeDestinee" src={Logo} alt="Logo" /></Link>
                    <h3 id="LogoName">Code <br/> Destinee</h3>
            </div>
            
            <div id="Navbar">
                <Link className="NavLink" to='/'>Home</Link>
                <Link className="NavLink" to='/About'>About</Link>
                <Link className="NavLink" to='/Blog'>Blog</Link>
                <Link className="NavLink" to='/Contact'>Contact</Link>
                <img className="NavLink" id="SearchIcon" src={Search} alt="Search-Icon" />
            </div>
        </div>
        
        <NavMini />
        </div>
    )
}

export default Navbar