import React, { Component } from 'react';
import ResContainer from './ResContainer';
import {getReservations} from '../apiCalls';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentReservations: []
    }
  }

  componentDidMount = () => {
    getReservations()
    .then(data => this.setState({currentReservations: data}))
  }

  componentDidUpdate = () => {
    getReservations()
    .then(data => this.setState({currentReservations: data}))
  }

  addReservation = (resy) => {
    this.setState({currentReservations: [resy, ...this.state.currentReservations]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <ResContainer reservations={this.state.currentReservations}/>
      </div>
    )
  }
}

export default App;