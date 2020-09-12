import React from 'react';
import Clock from './clock.js';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100
    }
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.mundur(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  } 

  mundur() {
    if(this.state.time > 0){
      this.setState((state) => ({
        time: state.time - 1
      }))
    }
  }

  render() {
    if(this.state.time > 0) {
      return(
        <>
        <Clock />
        <h1>Hitung mundur : {this.state.time} </h1>
        </>
        )
    } else {
      return ""
    }
  }
}
export default Timer;