import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey lighthen-3">
            <div className="container">
                <a className="brand-logo left" style={{fontFamily:"fantasy",fontSize: "Extralarge"}}>Candle Lit</a>
                <ul className="right">
                    <li><NavLink to="/" > Home</NavLink></li>
                    <li><NavLink to="/about" > About</NavLink></li>
                    <li><NavLink to="/explore" > Explore</NavLink></li>
                    <li><NavLink to="/bookAppointment" > Book Appointment</NavLink></li>
                    <li><NavLink to="/help" >Help</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar