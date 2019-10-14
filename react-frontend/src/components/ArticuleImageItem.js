import React, { Component } from 'react';
import axios from 'axios';
import './FeatureImageItems.css';

class ArticuleImageItem extends Component {
    state = {
        imageURL: '',
        isLoading: false
    }
   

    componentDidMount(){
        const getImageURL = axios.get('wp-json/wp/v2/media/6')

        Promise.all([getImageURL]).then(res => {
          
            this.setState({
                imageURL: res[0].data.media_details.sizes.full.source_url,
                isLoading: true
            })
        })
    }

    render(){
        const {imageURL, isLoading } = this.state
        if(isLoading){
            return (
                <div className="FeatureImage-itemstyle">
                    <img className="FeatureImage-img" src={ imageURL } alt='articule pic'/>
                    <h2 className="FeatureImage-tag">Lastest Blog</h2>
                </div>
                
             
            )

        } 
            return null;
     
    }


}

export default  ArticuleImageItem