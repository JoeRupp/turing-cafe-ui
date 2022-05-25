import React from 'react';
import Reservation from './Reservation';
import './Reservation.css'

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
    <section>
      {createReservations}
    </section>
  )
}

export default ResContainer;