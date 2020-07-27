import React from 'react'
import {UserForm} from './UserForm';

const BookAppointment = () => {
    return (
        <div className="BookAppointment">
                <br></br>
                <br></br>
               <h2 className="center" style={{fontFamily:"cursive",fontSize: "Extralarge", fontWeight:'bolder'}}>Book Appointment </h2>
               <br></br>
               <hr></hr>
            <UserForm  />
        </div>
    )
}

export default BookAppointment