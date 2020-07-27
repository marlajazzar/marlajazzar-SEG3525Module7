import React from 'react';
import ReactDOM from "react-dom";
import Example from './Cards';
import Example1 from './Cards1';
import Example2 from './Cards2';
import Example3 from './Cards3';



const Explore = () => {
    return (
        <div className="container">
             <br></br>
             <h2 className="center" style={{fontFamily:"cursive",fontSize: "Extralarge", fontWeight:'bolder'}}>Explore</h2>
             <br></br>
             <p>Consequat Lorem ea amet excespteur deserunt nostrud. Tempor dolore proident exercitation eiusmod id veniam minim amet tempor officia. Tempor ullamco laboris adipisicing magna qui laborum minim Lorem ea ea in. Amet id minim duis sint est sunt id. Veniam sint mollit commodo aliquip eiusmod id dolore adipisicing eiusmod dolor. Eiusmod magna qui enim nostrud consequat sunt esse irure dolor nisi.</p>
             <br></br>
            <Example />
            <Example1 />
            <Example2 />
            <Example3 />
           <br></br>
           <br></br>
        </div>
    )
    };
export default Explore