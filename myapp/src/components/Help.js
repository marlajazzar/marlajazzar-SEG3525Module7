import React, { Component } from 'react';

class Help extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
              <br>
              </br>
              <br></br>
                  <h2 className="center" style={{fontFamily:"cursive",fontSize: "Extralarge", fontWeight:'bolder'}}>Help.</h2>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <div className="center" style={{borderStyle:"double", borderColor:"white", backgroundColor:"#e0c3c8",borderRadius:"30px", maxWidth:"750px", margin:"auto"}}>
                <h3 style={{fontFamily:"cursive"}}>The goal of this website is so that clients can book their appointment online and learn more about our company CandleLit</h3>
            </div>
            
            
            </div>
        );
    }
}

export default Help;