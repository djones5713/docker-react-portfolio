import React, { Component, Fragment } from 'react';
import ArticuleImageItem from './ArticuleImageItem';
import NarBar from './NavBar';
import axios from 'axios';

class ArticulePage extends Component {
    state = {
        book: {},
        isLoading: false
    }

    componentDidMount(){

        axios.get(`/wp-json/wp/v2/articules/${this.props.match.params.id}`)
            .then( res => {
                this.setState({
                book: res.data,
                isLoading: true
            })
        })
            .catch(err => console.log(err)) 
    }



    render(){
        const { book, isLoading } = this.state;
        if(isLoading){
            return(
                <Fragment>

                    <NarBar />
                    
                    <h1>{book.featured_media}</h1>
                    <div className='FeaturePage-blurb' dangerouslySetInnerHTML={{ __html: book.content.rendered }}></div>
                </Fragment>
            )
        }

        return <h3>Loading...</h3>
       
    }
}

export default ArticulePage