import React, { Component } from 'react';
import ReactMarkDown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import axios from 'axios';
import renderHTML from 'react-render-html';
import { ROOT_URL } from '../../actions/index';


//import Markdown from 'markdown'; // need to uninstalllllllllllllll
//import { toHTML }  from 'md2html'; // need to uninstalllllllllllllll


class View extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            employees: ['Awon', 'Rasel', 'Tanay'],
            markdownString: ''
         };
    }
    componentDidMount() {
        axios.get(`${ROOT_URL}api/getfilesofamonth`)
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

                    { renderHTML(this.state.markdownString)}
            
                </div>
            </div>
        );
    }
}

export default View;
