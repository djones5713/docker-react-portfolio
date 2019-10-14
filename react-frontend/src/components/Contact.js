import React, { Component } from 'react';
import NavBar from './NavBar';
import ContactBox from './ContactBox';
import Footer from './Footer';
import './Contact.css';


class Contact extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
}

render(){
    return(
        <div>
            <NavBar />
            <div  className="Contact-Header">
                <div className="Contact-Content">
                <h2 className="Contact-Img-Box-Title">Let's Talk Code</h2>
                        <ContactBox />
                </div>
            </div>
            <Footer />
        </div>
    )
}
}

export default Contact