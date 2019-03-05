import React, { Component } from 'react';
import axios from 'axios';

import { ROOT_URL } from '../actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      employees: ['Awon', 'Rasel', 'Tanay'],
      markdownString: '# This is the heading. ',
      };
    this.handleSelectEmployee = this.handleSelectEmployee.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount() {
    axios.get(`${ROOT_URL}/api/getmdfile`)
    .then(response => {
      console.log('Success ==== ', response);
      this.setState({ markdownString: response.data });
    })
    .catch(error => console.log('Error.response === ', error.response));
  }

  
  render() {
    return (
      <div className="p-4">
        <div>
            {this.state.markdownString} 
        </div>
      </div>
    );
  }
}

export default Home;
