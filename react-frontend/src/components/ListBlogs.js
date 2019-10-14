import React, { Component } from 'react';
import BlogItems from './BlogItems';
import axios from 'axios';
import './ListBlogs.css';

class ListBlogs extends Component {
    constructor(){
    super()
    this.state = {
        books: [],
        isLoaded: false
    }
    }

    componentDidMount(){
        axios.get('/wp-json/wp/v2/articules')
            .then(res => this.setState({
                books: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
        
    }

    render(){
       const { books, isLoaded } = this.state;
       if(isLoaded) {
        return (
            <div className="Blog-container">
                 <h2 className='Blog-container-title'>More Blogs</h2>
                { books.map(book => (
                    <BlogItems  key={ book.id} book={book} />
                )) }
            </div>
        )
       }
        
       return null
    }
}

export default ListBlogs