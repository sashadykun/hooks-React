import React, { Component } from 'react';
import axios from 'axios';
import { timingSafeEqual } from 'crypto';

class ResourceList extends Component {

    state = { resources: [] };

    async componentDidMount(){
       const resp = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

       this.setState({
           resources: resp.data
       })
    }

    async componentDidUpdate(prevProps){
        if (prevProps.resource !== this.props.resource){
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

            this.setState({
                resources: resp.data
            })
        }
    }

    render(){
        return <div>{this.state.resources.length}</div>
    }
}

export default ResourceList;