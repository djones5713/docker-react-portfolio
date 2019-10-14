import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './BlogItems.css';

class BlogItems extends Component {
    state = {
        imageURL: '',
        isLoading: false
    }
    static propTypes = {
        book: PropTypes.object.isRequired
    }
  
    componentDidMount(){
        const { featured_media, author } = this.props.book;
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
        const { id, title } = this.props.book
        const { isLoading } = this.state
        if(isLoading){
            return (
               
                <div className="Blog-itemstyle">
                    <Link className="Blog-title" to={`/book/${id}`}>{ title.rendered }</Link>
                </div>
             
            )

        } 
            return null;
     
    }


}

export default BlogItems 