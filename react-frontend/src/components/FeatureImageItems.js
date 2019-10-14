import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './FeatureImageItems.css';

class FeatureImageItems extends Component {
    state = {
        imageURL: '',
        isLoading: false
    }
    static propTypes = {
        feature: PropTypes.object.isRequired
    }

    componentDidMount(){
        const { featured_media } = this.props.feature;
        const getImageURL = axios.get(`/wp-json/wp/v2/media/${featured_media}`)

        Promise.all([getImageURL]).then(res => {
          
            this.setState({
                imageURL: res[0].data.media_details.sizes.full.source_url,
                isLoading: true
            })
        })
    }

    render(){
        const { title } = this.props.feature
        const {imageURL, isLoading } = this.state
        if(isLoading){
            return (
                <div className="FeatureImage-itemstyle">
                    <img className="FeatureImage-img" src={ imageURL } alt={title.rendered} />
                    <h2 className="FeatureImage-tag">Lastest Blog</h2>
                    <h2 className="FeatureImage-title">{ title.rendered }</h2>
                </div>
                
             
            )

        } 
            return null;
     
    }


}

export default FeatureImageItems