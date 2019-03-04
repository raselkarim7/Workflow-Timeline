import React, { Component } from 'react';

// import axios from 'axios';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux'; 

//import { ROOT_URL } from '../../actions/index';
import { getFilesOfAMonth } from '../../actions/files';


class View extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employees: ['Awon', 'Rasel', 'Tanay'],
            months: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            years: ['2019', '2020', '2021'],
            selectedMonth: 'Mar', 
            selectedYear: '2019',
            markdownString: ''
         };
    }

    componentWillMount() {
        this.props.getFilesOfAMonth('Mar', 2019);   
    }


    render() {
        if (!this.props.outputFileText) {
            return <span>Loading...</span>;
        }
        return (
            <div>
                <h1 style={{ fontWeight: 'lighter' }}> View </h1>
                <div>
                    { renderHTML(this.props.outputFileText)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { outputFileText: state.file.outputFileText };
}

export default connect(mapStateToProps, { getFilesOfAMonth })(View);
