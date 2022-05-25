const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
  .catch(err => console.log(err))
}

const makeReservation = (newResy) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: "POST",
    body: JSON.stringify(newResy),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err))
}

export {getReservations, makeReservation};
// export default getReservations;