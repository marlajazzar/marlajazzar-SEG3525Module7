import React from 'react'
import Slideshow from './Slide';


const Home = () => {
    return (

        <div className="container" >
            <br></br>

            <h2 className="center" style={{fontFamily:"cursive",fontSize: "Extralarge", fontWeight:'bolder'}}>Home</h2>
            <br></br>
            <Slideshow className="center"/>
            <div className="center" style={{borderStyle:"double", borderColor:"lightPink", borderRadius:"30px"}}>
                <h5 >Candle Lit is candle factory that allows individuals to design and make their own candle.</h5>
            </div>
            <br></br>
            <p>Consequat Lorem ea amet excepteur deserunt nostrud. Tempor dolore proident exercitation eiusmod id veniam minim amet tempor officia. Tempor ullamco laboris adipisicing magna qui laborum minim Lorem ea ea in. Amet id minim duis sint est sunt id. Veniam sint mollit commodo aliquip eiusmod id dolore adipisicing eiusmod dolor. Eiusmod magna qui enim nostrud consequat sunt esse irure dolor nisi.</p>
            <br></br>
        </div>
      
        
    
    );
}

export default Home;