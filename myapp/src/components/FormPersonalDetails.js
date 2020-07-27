import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <h3 className="center"> STEP 2: Enter User Details</h3>
                    <hr></hr>

                    <div className='center' style={{fontSize: "Extralarge"}}>
                        <p> Please Note: When booking an appointment online, there's a $10 fee that will be charged to your credit card.</p>
                    <TextField
                    hintText="Enter Your Credit Card"
                    floatingLabelText="Credit Card"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                    hintText="Enter The Expiration Date"
                    floatingLabelText="Expiry Date"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                    hintText="Enter A Date for the requested appointment"
                    floatingLabelText="Date"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                    />
                    <br/>
               

                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />

<RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    </div>

                </React.Fragment>
            </MuiThemeProvider>
        );
         
    
    }
}

const styles = {
    button: {
        margin:15
    }
}

export default FormPersonalDetails;