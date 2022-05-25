import React from 'react';
import './Reservation.css'

const Reservation = ({name, date, time, number}) => {
  return (
    <div className='reservationCard'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Reservation;