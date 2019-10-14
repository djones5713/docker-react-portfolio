import React, { Component } from 'react';
import NavBar from './NavBar';
import Articules from './Articules';
import Feature from './Feature';
import ListBlogs from './ListBlogs';
import Youtube from './Youtube';
import Footer from './Footer';
import Destiny1 from './Images/Destiny1.png';
import './Home.css';
import Logo from './Images/Icon.png';



class Home extends Component {
    constructor(props){
    super(props)
    this.state = {
        title: "Its About Code",
        subtitle: "Its About Code"
    }
}

render(){
    return(
        <div className="Body">
            <NavBar />
            <div className='Header'>
                <div className='HomeContent'>
                    <div className="Home-HeaderContent">
                        <div id="NavLogo-mini">
                            <img id="CodeDestinee-mini" src={Logo} alt="Logo" />
                            <h3 id="LogoName-mini">Code <br/> Destinee</h3>
                        </div>
                         <h1 className='Home-title'>{this.state.title} </h1>
                         <h6 className='Home-subtitle'><strong>{this.state.subtitle}</strong></h6>
                    </div>
                    <img id='DestinyJ' src={Destiny1} alt='Destiny Jones' />
                </div>
            </div>
            <div className='Home-BottomContent'>
                <Articules/>
                <div className='Home-BottomContent-Two'>
                        <Feature />
                        <ListBlogs />
                </div>
                < Youtube />
            </div>
            <Footer />
        </div>
    )
}
}

export default Home