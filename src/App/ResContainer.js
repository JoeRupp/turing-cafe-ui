import React from 'react';
import Reservation from './Reservation';
import './ResContainer.css'

const ResContainer = ({reservations}) => {
  const createReservations = reservations.map((resy) => {
      return (
        <Reservation 
          key={resy.id}
          name={resy.name}
          date={resy.date}
          time={resy.time}
          number={resy.number}
        />
      )
  })

  return(
    <section className='resContainer'>
      {createReservations}
    </section>
  )
}

export default ResContainer;