import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { connect } from 'react-redux';
import { ROOT_URL } from '../../actions/index';
import { getServerDate } from '../../actions/files';

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectOptionWarning: false,
            textareaWarning: false, 
            employees: ['Awon', 'Rasel', 'Tanay', 'Twaha', 'Arif', 'Shawon', 
                        'Manirul', 'Reza', 'Riazul', 'Shamim', 'Palash', 'Zobair', 'Avijit' ],
            selectedEmployee: '',
            writtentext: '',
        };
        this.handleSelectEmployee = this.handleSelectEmployee.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        this.props.getServerDate();
    }

    handleSelectEmployee(e) {
         console.log('Inside handleSelectEmployee', e.target.value, e, e.target);
        if (e.target.value.length > 0) {
            this.setState({ selectOptionWarning: false });
        }
        this.setState({ selectedEmployee: e.target.value });
    }
    
    handleFormChange(e) {
        if (e.target.value.length > 0) {
            this.setState({ textareaWarning: false });
        }
        this.setState({ writtentext: e.target.value });
    }
    
    submitForm(e) {
        const notSelected = this.state.selectedEmployee.length === 0;
        const emptyText = this.state.writtentext.length === 0;
        this.setState({ selectOptionWarning: notSelected, textareaWarning: emptyText });
        if (notSelected || emptyText) {
            return;
        }
        console.log('now write request here.', notSelected, emptyText);
        const request = axios.get(`${ROOT_URL}api/savemdfile`, { 
            params: { 
                username: this.state.selectedEmployee, 
                textData: this.state.writtentext 
            } 
        });
        request.then(response => {
            alert('Data Saved Successfully');
            this.props.gotoViewPage(this.props.server_date);
            console.log('Saveed File Response', response);
        }).catch(error => {
            console.log('File saving Error..', error.response);
        });
    }

    render() {
        return (
            <div >
                <h1 style={{ fontWeight: 'lighter' }}>Write</h1>
                <div className="">
                    <select 
                        value={this.state.selectedEmployee} 
                        onChange={this.handleSelectEmployee}
                    >
                        <option value="">Select Employee</option>
                        {
                        _.map(this.state.employees.sort(), employee => 
                            <option key={employee} value={employee}>{employee}</option>
                        )
                        }
                    </select>
                    {   
                    (this.state.selectOptionWarning) && 
                    <div className="text-primary" style={{ fontSize: '15px', fontWeight: 700 }}>Select employee at first.</div>
                    }

                    <div className="form-group mt-2">
                        {/* <label htmlFor="comment"><b>Write here:</b></label> */}
                        <textarea 
                            className="form-control" rows="5" id="comment" 
                            value={this.state.writtentext} 
                            onChange={this.handleFormChange}
                        />
                        {   
                        ((!this.state.selectOptionWarning) && (this.state.textareaWarning)) && 
                        <div 
                            className="text-primary" 
                            style={{ fontSize: '15px', fontWeight: 700 }}
                        >
                            Now write here.
                        </div>
                        }
                        <button 
                            className="btn btn-primary mt-2"
                            onClick={this.submitForm}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
function maStateToProps(state) {
    return { server_date: state.file.server_date };
}
export default connect(maStateToProps, { getServerDate })(Write);
