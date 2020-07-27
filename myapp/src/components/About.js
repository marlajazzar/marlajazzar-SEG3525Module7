import React from 'react'
import Youtube from './Youtube';
import back1 from './back1.jpg'
import './About.css'
import Instructors from './Instructors';
import Hours from './Hours';


const About = () => {
    return (
        <div className="About">
            <br></br>
            <br></br>
              <h2 className="center" style={{fontFamily:"cursive",fontSize: "Extralarge", fontWeight:'bolder'}}>About</h2>
              <br></br>
              <br></br>


              <div className="center" style={{borderStyle:"double", borderColor:"black", maxWidth:"1050px", margin:"auto"}}>
                <p> Consequat Lorem ea amet excepteur deserunt nostrud. Tempor dolore proident exercitation eiusmod id veniam minim amet tempor officia. Tempor ullamco laboris adipisicing magna qui laborum minim Lorem ea ea in. Amet id minim duis sint est sunt id. Veniam sint mollit commodo aliquip eiusmod id dolore adipisicing eiusmod dolor. Eiusmod magna qui enim nostrud consequat sunt esse irure dolor nisi. </p>
            </div>




              <hr></hr>
            <br></br>
            <br></br>
            <Youtube className='Youtube1'/>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <h2 className="center" style={{fontFamily:"georgia,serif", fontWeight:'normal'}}>THERE ARE MANY BENEFITS THAT BURING A CANDLE CAN HAVE:</h2>

            <div className="center" style={{borderStyle:"double", borderColor:"white", backgroundColor:"#ffb9c6",borderRadius:"30px", maxWidth:"750px", margin:"auto"}}>
                <h3 style={{fontFamily:"cursive"}}> 1-  Reduces stress</h3>
            </div>
            <div className="center" style={{borderStyle:"double", borderColor:"white", backgroundColor:"#e0c3c8",borderRadius:"30px", maxWidth:"750px", margin:"auto"}}>
                <h3 style={{fontFamily:"cursive"}}>2-  Reduces anxiety </h3>
            </div>
            
            <div className="center" style={{borderStyle:"double", borderColor:"white", backgroundColor:"#e3c5c0",borderRadius:"30px", maxWidth:"750px", margin:"auto"}}>
                <h3 style={{fontFamily:"cursive"}}>3-  Promotes good quality sleep</h3>
            </div>
          
            <div className="center" style={{borderStyle:"double", borderColor:"white", backgroundColor:"#cfcbcd",borderRadius:"30px", maxWidth:"750px", margin:"auto"}}>
                <h3 style={{fontFamily:"cursive"}}>4-  Increases Focus</h3>
            </div>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <h2 className="center" style={{fontFamily:"georgia,serif", fontWeight:'normal'}}>INSTRUCTORS</h2>
            <br></br>
            <Instructors />
            <br></br>
            <br></br>
            <hr></hr>
            <h2 className="center" style={{fontFamily:"georgia,serif", fontWeight:'normal'}}>LOCATION & HOURS</h2> <br></br>
            <br></br>
            <br></br>
            <Hours />
        </div>
    )
}

export default About