import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <h3 className="center"> STEP 3: Confirm User Details</h3>
                    <hr></hr>
                    <div className='center' style={{fontSize: "Extralarge"}}>
                   <List>
                  

                       <ListItem
                       primaryText="First Name"
                       secondaryText={firstName}
                       />

                       <ListItem
                       primaryText="Last Name"
                       secondaryText={lastName}
                       />

                        <ListItem
                       primaryText="Email"
                       secondaryText={email}
                       />

                        <ListItem
                       primaryText="Credit Card Number"
                       secondaryText={occupation}
                       />

                        <ListItem
                       primaryText="Credit Card Expiration Date"
                       secondaryText={city}
                       />

                        <ListItem
                       primaryText="Date for Requested Appointment"
                       secondaryText={bio}
                       />


                   </List>
                    <br/>

                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={StyleSheet.button}
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

export default FormUserDetails;