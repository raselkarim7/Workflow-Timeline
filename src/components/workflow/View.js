import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux'; 

import { getFilesOfAMonth, getServerDate } from '../../actions/files';
import FilterBy from './FilterBy';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employees: ['Awon', 'Rasel', 'Tanay'], 
         };
    }

    componentWillMount() {
        const request = this.props.getServerDate(); 
        request.then(response => {
            const serverDate = response.payload.data;
            this.props.getFilesOfAMonth(serverDate.month, serverDate.year);
        }).catch(error => console.log(error.response));
    }


    render() {
        if (!this.props.outputFileText) {
            return <span>Loading...</span>;
        }
        return (
            <div>
                <h1 style={{ fontWeight: 'lighter' }}> View </h1>
                <FilterBy 
                    getFilesOfAMonth={this.props.getFilesOfAMonth} 
                    server_date={this.props.server_date} 
                />
                <div>
                    { renderHTML(this.props.outputFileText)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        outputFileText: state.file.outputFileText,
    };
}

export default connect(mapStateToProps, { getFilesOfAMonth, getServerDate })(View);
