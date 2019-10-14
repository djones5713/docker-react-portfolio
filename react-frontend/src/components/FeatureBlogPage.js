import React, { Component } from 'react';
import axios from 'axios';
import FeatureBlogPageItem from './FeatureBlogPageItem';

class FeatureBlogPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            features: [],
            isLoading: false
        }
    }
    
    componentDidMount(){
        axios.get('/wp-json/wp/v2/feature')
            .then(res => this.setState({
                features: res.data,
                isLoading: true
            }))
            .catch(err => console.log(err))
    }

    render(){
        const { features, isLoading } = this.state;
        if(isLoading) {
        return(
        <div>
            {features.map(feature => (
                <FeatureBlogPageItem key={ feature.id} feature={feature} />
            ))

            }
        </div>
        )
    }
        return null
    }
}

   

export default FeatureBlogPage