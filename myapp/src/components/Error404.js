import React, { Component } from 'react';

class Error404 extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
              <br>
              </br>
              <br></br>
                  <h1 className="center" style={{fontFamily:"cursive",fontSize: "Extralarge", fontWeight:'bolder'}}>Error 404</h1>
                  <h2 className="center" style={{fontFamily:"cursive",fontSize: "Extralarge", fontWeight:'bolder'}}>Page Not Found</h2>
            </div>
        );
    }
}

export default Error404;