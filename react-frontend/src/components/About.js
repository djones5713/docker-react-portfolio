import React, { Component } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Destiny4 from './Images/Destiny4.png';
import Logo from './Images/Icon.png';
import AboutBlur from './AboutBlur';
import './About.css';


class About extends Component{
    constructor(props){
    super(props) 
    this.state = {
        title: "Destiny Jones",
        subtitle: "Full Stack Developer"
    }
}

render(){
    return (
        <div className='About-container'>
            <Navbar />
            <div className='Header'>
                <div className='HomeContent'>
                        <div className="Home-HeaderContent">
                            <div id="NavLogo-mini">
                                <img id="CodeDestinee-mini" src={Logo} alt="Logo" />
                                <h3 id="LogoName-mini">Code <br/> Destinee</h3>
                            </div>
                            <h1 className='About-title'>{this.state.title}</h1>
                            <h6 className='About-subtitle'><strong>{this.state.subtitle}</strong></h6>
                        </div>
                        <img id='DestinyJ2' src={Destiny4} alt='Destiny Jones' />
                        <a className='Resume' href='https://docs.google.com/document/d/18BqY5ERrVg1jd8HQG5ShE0JkOxDFxcst7Gqpi7aMzcc/edit?usp=sharing' target="_blank" rel="noopener noreferrer" >Resume</a>
                </div>
            </div>
            <div className='Home-BottomContent'>
              <AboutBlur />
            </div>
            <Footer />
        </div>
    )
}
}

export default About