import React, { Component } from 'react';
import axios from 'axios';
import './ContactBox.css';


class ContactBox extends Component {
    constructor(props){
    super(props)
    this.state = {
        name: '',
        email: '',
        message: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    handleFormSubmit( event ) {
        event.preventDefault();
            console.log(this.state);

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: 'POST',
            url: "http://localhost:3001/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if(response.data.msg === 'success'){
                alert("Message Sent.");
                this.resetForm()
            
            } else if(response.data.msg === 'fail') {
                alert('Message failed to send.')

            }

    })


        
    }

    render(){
        return (
            <form className="Contact-Box" method='POST'>
                <div className="Contact-Top-Input">
                    <div className="Left">
                        <h3 className="Contact-Input-subtitle">Name</h3>
                        <input className="Contact-Input" 
                            type="text" 
                            id="name" 
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <div>
                        <h3 className="Contact-Input-subtitle">Email</h3>
                        <input className="Contact-Input"
                            type="email"
                            id="email"
                            value={this.state.email} 
                            onChange={e => this.setState({ email: e.target.value })}/>
                    </div>
                </div>
                    <div className="Contact-Bottom-Input">
                        <h3 className="Contact-Input-subtitle-message">Message</h3>
                        <textarea className="Contact-Input-Message" 
                            id="message"
                            value={this.state.message}
                            onChange={e => this.setState({ message : e.target.value })}> 
                        </textarea>
                        <button  className="Contact-Button" 
                            type="submit" 
                            value="Submit"
                            onClick={e => this.handleFormSubmit(e)}>
                            Submit
                        </button>
                    </div>
            </form>
        )
    }
}

export default ContactBox