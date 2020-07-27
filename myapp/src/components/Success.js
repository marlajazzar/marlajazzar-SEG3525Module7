import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <div className='center' style={{fontSize: "Extralarge"}}>
                    <h1>Thank You For Your Submission</h1>
                    <p> You will get an email with further instrcutions in 2-3 business days</p>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
         
    
    }
}

export default Success;