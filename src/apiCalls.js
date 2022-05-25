const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
  .catch(err => console.log(err))
}

export default getReservations;