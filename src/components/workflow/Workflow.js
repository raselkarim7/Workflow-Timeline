import React, { Component } from 'react';
import View from './View';
import Write from './Write';

class Workflow extends Component {
    constructor(props) {
        super(props);
        this.state = { view: true, write: false, server_date: '' };
        this.handleBtnSelect = this.handleBtnSelect.bind(this);
        this.gotoViewPage = this.gotoViewPage.bind(this);
    }
    handleBtnSelect(e) {
        console.log(e.target.name);
        if (e.target.name === 'view') {
            this.setState({ view: true, write: false });
        } else {
            this.setState({ view: false, write: true });
        }
    }
    gotoViewPage(serverDate) {
        this.setState({ view: true, write: false, server_date: serverDate });
    }
    render() {
        console.log('this.state.view = ', this.state.view, 'this.state.write = ', this.state.write);
        return (
            <div className="p-3 mt-2">
                <h1 className="display-4 text-center">Workflow Timeline</h1>
                <div className="d-flex justify-content-around mt-4">
                    <button 
                        name='view'
                        className="btn btn-primary" 
                        style={{ width: '25%', fontSize: '18px', }} 
                        disabled={this.state.view}
                        onClick={this.handleBtnSelect}
                    >
                        View
                    </button>
                    <button 
                        name='write'
                        className="btn btn-primary" 
                        style={{ width: '25%', fontSize: '18px', }} 
                        disabled={this.state.write}
                        onClick={this.handleBtnSelect}
                    >
                        Write
                    </button>
                </div>
                {
                    (this.state.view) && 
                    <View server_date={this.state.server_date} />
                }

                {
                    (this.state.write) && 
                    <Write gotoViewPage={this.gotoViewPage} />
                }


            </div>
        );
    }
}

export default Workflow;
