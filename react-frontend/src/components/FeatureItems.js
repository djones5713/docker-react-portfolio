import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './FeatureItems.css';

class FeatureItems extends Component {
    state = {
        imageURL: '',
        isLoading: false
    }
    static propTypes = {
        feature: PropTypes.object.isRequired
    }

    componentDidMount(){
        const { featured_media, author } = this.props.feature;
        const getImageURL = axios.get(`/wp-json/wp/v2/media/${featured_media}`)
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

        Promise.all([getImageURL, getAuthor]).then(res => {
          
            this.setState({
                imageURL: res[0].data.media_details.sizes.full.source_url,
                isLoading: true
            })
        })
    }

    render(){
        const { id, title, excerpt } = this.props.feature
        const {imageURL, isLoading } = this.state
        if(isLoading){
            return (
               
                <div className="Feature-itemstyle">
                    <img className="Feature-img" src={ imageURL } alt={title.rendered} />
                    <h2 className="Feature-tag">Lastest Blog</h2>
                    <h2 className="Feature-title">{ title.rendered }</h2>
                    <p className="Feature-blurb" dangerouslySetInnerHTML={{ __html: excerpt.rendered}} />
                    <Link className="Feature-link" to={`/feature/${id}`}>Read More</Link>
                </div>
             
            )

        } 
            return null;
     
    }


}

export default FeatureItems 