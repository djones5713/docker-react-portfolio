import React, { Component } from 'react';
import './Youtube.css';

class Youtube extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
    }

    render(){
        return(
            <div className="Youtube-Container">
                <a href="https://www.youtube.com/channel/UCw-4IF7l8zVdGuN8V4JTIgw?view_as=subscriber" 
                    target='_blank' 
                    className="Youtube-Header"
                    rel="noopener noreferrer">
                    <h1  className="Youtube-Title">Youtube</h1>
                    <h2 className="Youtube-Subtitle">Channel</h2>
                </a>
                <div className="Youtube-Box">

                </div>
            </div>
        )
    }
}

export default Youtube