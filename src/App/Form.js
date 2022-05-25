import React, { Component } from 'react';
import {makeReservation} from '../apiCalls';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = (event) => {
    event.preventDefault();
    const newResy = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    makeReservation(newResy)
    this.props.addReservation(newResy)
  }

  render() {
    return(
      <form>
        <input
          type="text"
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        ></input>
        <input
          type="text"
          placeholder='date'
          name='date'
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        ></input>
        <input
          type="text"
          placeholder='time'
          name='time'
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        ></input>
        <input
          type="text"
          placeholder='number'
          name='number'
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        ></input>
        <button className='formBtn' onClick={(event) => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;