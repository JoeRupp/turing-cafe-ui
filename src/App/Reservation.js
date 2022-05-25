import React from 'react';

const Reservation = ({name, date, time, number}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
      <p></p>
    </div>
  )
}

export default Reservation;