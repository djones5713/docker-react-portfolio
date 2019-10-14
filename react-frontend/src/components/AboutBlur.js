import React, {Component} from 'react';
import Design from './Images/Design.png';
import Market from './Images/Market.png';
import Computer from './Images/Computer.png';
import Bio from './Bio';
import Projects from './Projects';
import './AboutBlur.css';

class AboutBlur extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
   
render(){
    return(
        <div>
            <Bio />
            <div className='skills'>

                <div className='skills-container'>
                    <img className='skills-img'src={Design} alt="design tools" />
                    <h3 className='skills-subtitle'>Designer</h3>
                    <p>Adobe Photoshop</p>
                    <p>Adobe XD</p>
                </div>
                <div className='skills-container'>
                    <img className='skills-img' src={Computer} alt="coding tools" />
                    <h3 className='skills-subtitle'>Developer</h3>
                            <p>ReactJS</p>
                            <p>JavaScript</p>
                            <p>Rest API</p>
                            <p>NodeJS</p>
                            <p>PostgresSQL</p>
                            <p>React Native</p>
                </div>
                <div className='skills-container'> 
                    <img className='skills-img' src={Market} alt="marketing tools"/>
                    <h3 className='skills-subtitle'>Marketing</h3>
                    <p>Search Engine Optimization</p>
                    <p>Content Creation</p>
                </div>
        
            </div>
            <Projects />
        </div>
    )
}
}

export default AboutBlur;