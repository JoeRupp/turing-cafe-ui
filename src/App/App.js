import React, { Component } from 'react';
import ResContainer from './ResContainer';
import getReservations from '../apiCalls';
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          
        </div>
        <div className='resy-container'>
        <ResContainer reservations={this.state.currentReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
