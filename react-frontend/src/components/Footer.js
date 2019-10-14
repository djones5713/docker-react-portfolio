import React from 'react';
import instagram from './Images/instagram.png';
import github from './Images/github.png';
import linkedin from './Images/linkedin.png';
import './Footer.css';

function footer(props){
return (
        <div className="Footer-container">
            <a href="https://github.com/djones5713" target="_blank" rel="noopener noreferrer" >
                <img className="Footer-link" src={github} alt="github link" />
            </a>
            <a href="https://www.linkedin.com/in/destinyljones/" target="_blank" rel="noopener noreferrer" >
                <img className="Footer-link" src={linkedin} alt="likedin link" />
            </a>
            <a href="https://www.instagram.com/codedestinee_/" target="_blank" rel="noopener noreferrer" >
                <img className="Footer-link" src={instagram} alt="instagram link"/>
            </a>
        
    </div>
 
)
}

export default footer