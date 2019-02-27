import React, { Component } from 'react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import { ROOT_URL } from '../../actions/index';

class View extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            employees: ['Awon', 'Rasel', 'Tanay'],
            markdownString: ''
         };
    }
    componentDidMount() {
        axios.get(`${ROOT_URL}api/getmdfile`)
        .then(response => {
          console.log('Success ==== ', response);
          this.setState({ markdownString: response.data });
        })
        .catch(error => console.log('Error.response === ', error.response));
      }
    render() {
        return (
            <div>
                <h1 style={{ fontWeight: 'lighter' }}> View </h1>
                <div>
                <ReactMarkDown 
                    source={this.state.markdownString} 
                />
                </div>
            </div>
        );
    }
}

export default View;
