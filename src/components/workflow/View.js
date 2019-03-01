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
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            years: ['2019', '2020', '2021'],
            selectedMonth: 'Mar', 
            selectedYear: '2019',
            markdownString: ''
         };
    }
    componentDidMount() {
        axios.get(`${ROOT_URL}api/getfilesofamonth?month=Mar&year=2019`)
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
