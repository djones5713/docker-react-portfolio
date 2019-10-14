import React, { Component } from 'react';
import NavBar from './NavBar';
import FeatureBlogPage from './FeatureBlogPage';
import Footer from './Footer';
import Articules from './Articules';
import './Blog.css';

class Blog extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
}

render(){
    return(
        <div>
            <NavBar />
                <div className='Blog-Header'>
                    <div className='Blog-Content'>
                        <FeatureBlogPage/>
                        <div>
                            <h1 className='Blog-Feature-Title'>Marketing</h1>
                            <h2 className='Blog-Feature-Subtitle'>The Coder With A Brand</h2>
                            <p className="FeatureBlog-tag-description">Guide</p>
                        </div>
                       
                    </div>
                    <Articules />
                    <Footer />
                </div>
        </div>
           
      
    )
}
}

export default Blog