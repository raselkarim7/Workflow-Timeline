import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { getServerDate } from '../../actions/files';


class FilterBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: 0,
            days: 0, 
            selectedMonth: '',
            months: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            selectedYear: '',
            years: ['2019', '2020', '2021'],
        };
        this.handleSelectYear = this.handleSelectYear.bind(this);
        this.handleSelectMonth = this.handleSelectMonth.bind(this);
        this.handleSelectDay = this.handleSelectDay.bind(this);
    }

    componentWillMount() {
       // this.props.getServerDate();
    }

    componentDidMount() {
        const request = this.props.getServerDate();
        request.then(response => {
            const date = response.payload.data;
            const { day, month, year } = date; /* day is unused here */
            const monthNameToNum = this.state.months.findIndex(a => a === month) + 1;
            const noofdays = this.daysInMonth(monthNameToNum, year);
            const daysArray = Array.from({ length: noofdays }, (v, k) => `${k + 1}`);  
            const formSubmitDay = 
                !this.props.server_date ? '' : parseInt(this.props.server_date.day, 0);
            // console.log('----- ---- ----', formSubmitDay);
            this.setState({ 
                selectedDay: formSubmitDay, 
                selectedMonth: month, 
                selectedYear: year, 
                days: daysArray 
            });
        }).catch(error => {
            console.log(error, error.response);
        });
    }

    daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }   

    handleSelectYear(e) {
        console.log('###---### FilterBy.js handleSelectYear');
        this.props.getFilesOfAMonth('', e.target.value);
        this.setState({ selectedYear: e.target.value, selectedMonth: '', selectedDay: '' });
    }
    handleSelectMonth(e) {
        const monthNameToNum = this.state.months.findIndex(a => a === e.target.value) + 1;
        const noofdays = this.daysInMonth(monthNameToNum, this.state.selectedYear);
        const daysArray = Array.from({ length: noofdays }, (v, k) => `${k + 1}`);  
        // console.log('days Array === ', daysArray, monthNameToNum, this.state.selectedYear);
        console.log('###---### FilterBy.js handleSelectMonth');
        this.props.getFilesOfAMonth(e.target.value, this.state.selectedYear);
        this.setState({ selectedMonth: e.target.value, selectedDay: '', days: daysArray });
    }
    handleSelectDay(e) {
        console.log('type of day', typeof (e.target.value));
        this.setState({ selectedDay: e.target.value });
    }
    renderWarning() {
        return (
            <span className="d-flex justify-content-center align-items-center">
                <span className="alert-info text-center rounded p-1 m-1 px-2">
                    <strong> Please: </strong> 
                    Select Month To Load Data
                </span>
            </span>
        );
    }
    render() {
        return (
            <div className="px-5 mx-5">
                  {/* { (this.state.selectedMonth === '') && this.renderWarning() } */}
                <div className="d-flex justify-content-between px-5 mx-5">

                    <div>
                        <select 
                            value={this.state.selectedYear} 
                            onChange={this.handleSelectYear}
                        >
                            <option value="">Select Year</option>
                            {
                            _.map(this.state.years, year => 
                                <option key={year} value={year}>{year}</option>
                            )}
                        </select>
                    </div>

                    <div >
                        <select 
                            value={this.state.selectedMonth} 
                            onChange={this.handleSelectMonth}
                        >
                            <option value="">Select Month</option>
                            {
                            _.map(this.state.months, month => 
                                <option key={month} value={month}>{month}</option>
                            )}
                        </select>
                    </div>
                    {
                        console.log('00000000000', this.state.selectedDay)
                    }
                    <div>
                        <select 
                            disabled={this.state.selectedMonth === ''}
                            value={this.state.selectedDay} 
                            onChange={this.handleSelectDay}
                        >
                            <option value="">Select Day</option>
                            {
                            _.map(this.state.days, day => 
                                <option key={day} value={day}>{day}</option>
                            )}
                        </select>
                    </div>

                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {  /*server_date: state.file.server_date*/ };
}

export default connect(mapStateToProps, { getServerDate })(FilterBy);
